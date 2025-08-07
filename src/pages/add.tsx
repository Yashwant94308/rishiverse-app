'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '@/components/Layout/MainLayout';
import { studentStore } from '@/store/StudentStore'; 

export default function AddPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError('Both fields are required');
      return;
    }

    const newStudent = {
      id: Date.now(), 
      name: name.trim(),
      email: email.trim(),
    };

    studentStore.addStudent(newStudent);

    router.push('/dashboard');
  };

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          className="border p-2 w-full"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 w-full"
          placeholder="Student-Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-red-600">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </MainLayout>
  );
}
