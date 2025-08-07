export const fetchStudents = async () => {
  const res = await fetch('/data/students.json'); // from public folder
  if (!res.ok) {
    throw new Error('Failed to fetch students');
  }
  return res.json();
};
