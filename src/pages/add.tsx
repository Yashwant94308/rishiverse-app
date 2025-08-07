'use client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '@/components/Layout/MainLayout';

export default function AddPage() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !course) {
      setError('Both fields are required');
      return;
    }

    // Simulate a post request (would go to an API or state)
    console.log('Submitted:', { name, course });

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
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        {error && <p className="text-red-600">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </MainLayout>
  );
}
