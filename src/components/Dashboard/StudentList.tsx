import { useEffect, useState } from 'react';
import { fetchStudents } from '@/utils/api';

interface Student {
  id: number;
  name: string;
  course: string;
}

export default function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data);
      } catch (error) {
        console.error('Failed to load students', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filtered = students.filter((s) =>
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
      ) : (
        <ul className="space-y-2">
          {filtered.map((student) => (
            <li key={student.id} className="border p-4 rounded shadow-sm">
              <div className="font-medium">{student.name}</div>
              <div className="text-sm text-gray-500">{student.course}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
