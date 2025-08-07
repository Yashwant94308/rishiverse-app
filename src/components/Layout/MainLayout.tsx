'use client';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div>
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Rishiverse Dashboard</h1>
        <button onClick={handleLogout} className="bg-white text-blue-600 px-4 py-1 rounded">
          Logout
        </button>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
