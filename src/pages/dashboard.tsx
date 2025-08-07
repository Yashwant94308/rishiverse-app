'use client';

import MainLayout from '@/components/Layout/MainLayout';
import StudentList from '@/components/Dashboard/StudentList';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="flex justify-end mb-4">
        <Link href="/add">
          <button className="bg-green-600 text-white px-4 py-2 rounded">+ Add Student</button>
        </Link>
      </div>
      <StudentList />
    </MainLayout>
  );
}
