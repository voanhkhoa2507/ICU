import {createContext, useContext, useState, ReactNode} from 'react';

type Role = 'talent' | 'hr';

type DemoUser = {
  role: Role;
  email: string;
};

type DemoAuthContextType = {
  user: DemoUser | null;
  login: (role: Role, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const DemoAuthContext = createContext<DemoAuthContextType | undefined>(undefined);

const DEMO_CREDENTIALS: Record<Role, {email: string; password: string}> = {
  talent: {
    email: 'talent@icu.vn',
    password: 'talent123',
  },
  hr: {
    email: 'hr@icu.vn',
    password: 'hr123',
  },
};

export function DemoAuthProvider({children}: {children: ReactNode}) {
  const [user, setUser] = useState<DemoUser | null>(null);

  const login = async (role: Role, email: string, password: string) => {
    const conf = DEMO_CREDENTIALS[role];
    if (email === conf.email && password === conf.password) {
      setUser({role, email});
    } else {
      throw new Error('Sai email hoặc mật khẩu demo.');
    }
  };

  const logout = () => setUser(null);

  return (
    <DemoAuthContext.Provider value={{user, login, logout}}>
      {children}
    </DemoAuthContext.Provider>
  );
}

export function useDemoAuth() {
  const ctx = useContext(DemoAuthContext);
  if (!ctx) throw new Error('useDemoAuth must be used within DemoAuthProvider');
  return ctx;
}

