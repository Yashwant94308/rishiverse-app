
export const fetchStudents = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch students');
  }

  const users = await res.json();

  const students = users.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
  }));

  return students;
};
