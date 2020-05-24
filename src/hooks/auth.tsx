import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { Q } from '@nozbe/watermelondb';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import AsyncStorage from '@react-native-community/async-storage';

import User from '../database/models/User';

import LoginError from '../errors/LoginError';

interface SignInData {
  email: string;
}

interface SignUpData {
  email: string;
  name: string;
}

interface AuthState {
  user: User;
}

interface AuthContexData {
  user: User;
  loading: boolean;
  signIn(data: SignInData): Promise<void>;
  signUp(data: SignUpData): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContexData>({} as AuthContexData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  const database = useDatabase();

  useEffect(() => {
    AsyncStorage.getItem('@WorkoutCompanion:user').then(user => {
      if (user) {
        setData({ user: JSON.parse(user) });
      }

      setLoading(false);
    });
  }, []);

  const signIn = useCallback(
    async ({ email }: SignInData) => {
      const usersCollection = database.collections.get<User>('users');

      const users = await usersCollection
        .query(Q.where('email', email))
        .fetch();

      const user = users[0];

      if (!user) {
        throw new LoginError('User not found');
      }

      await AsyncStorage.setItem(
        '@WorkoutCompanion:user',
        JSON.stringify({ id: user.id, name: user.name, email: user.email }),
      );

      setData({ user });
    },
    [database],
  );

  const signUp = useCallback(
    async ({ email, name }: SignUpData) => {
      const usersCollection = database.collections.get<User>('users');

      await database.action<User>(async () => {
        await usersCollection.create(newUser => {
          newUser.name = name;
          newUser.email = email;
        });
      });
    },
    [database],
  );

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@WorkoutCompanion:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, loading, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContexData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
