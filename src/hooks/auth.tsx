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

interface UserData {
  name: string;
  email: string;
}

interface AuthState {
  user: User;
}

interface AuthContexData {
  user: User;
  loading: boolean;
  signIn(user: UserData): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContexData>({} as AuthContexData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  const database = useDatabase();

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const user = await AsyncStorage.getItem('@WorkoutCompanion:user');

      if (user) {
        setData({ user: JSON.parse(user) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(
    async ({ email, name }: UserData) => {
      const usersCollection = database.collections.get<User>('users');

      const users = await usersCollection
        .query(Q.where('email', email))
        .fetch();

      let user = users[0];

      if (!user) {
        await database.action(async () => {
          user = await usersCollection.create(newUser => {
            newUser.name = name;
            newUser.email = email;
          });
        });
      }

      await AsyncStorage.setItem(
        '@WorkoutCompanion:user',
        JSON.stringify({ id: user.id, name: user.name, email: user.email }),
      );

      setData({ user });
    },
    [database],
  );

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@WorkoutCompanion:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
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
