'use client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '@/context/authContext';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      login();
      router.push('/dashboard');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Login
      </button>
    </form>
  );
}
