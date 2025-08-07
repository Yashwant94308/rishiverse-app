'use client';

import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { fetchStudents } from '@/utils/api';
import { studentStore } from '@/store/StudentStore';

const StudentList = observer(() => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (studentStore.allStudents.length === 0) {
      const loadData = async () => {
        try {
          const data = await fetchStudents();
          studentStore.setStudents(data);
        } catch (error) {
          console.error('Failed to load students', error);
        } finally {
          setLoading(false);
        }
      };
      loadData();
    } else {
      setLoading(false);
    }
  }, []);

  const filtered = studentStore.allStudents.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Students</h2>

      <input
        className="border p-2 mb-4 w-full max-w-md"
        placeholder="Search students..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : filtered.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200" style={{border: '1px solid black'}}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b" style={{color: 'red'}}>{student.id}</td>
                  <td className="py-2 px-4 border-b">{student.name}</td>
                  <td className="py-2 px-4 border-b">{student.email}</td> {/* Assuming 'course' is still the email */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
});

export default StudentList;
