import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface User {
  name: string;
  email: string;
}

interface AuthState {
  user: User;
}

interface AuthContexData {
  user: User;
  loading: boolean;
  signIn(user: User): Promise<void>;
}

const AuthContext = createContext<AuthContexData>({} as AuthContexData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

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

  const signIn = useCallback(async user => {
    await AsyncStorage.setItem('@WorkoutCompanion:user', JSON.stringify(user));

    setData({ user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn }}>
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
