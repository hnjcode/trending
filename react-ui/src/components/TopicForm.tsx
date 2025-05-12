import { useState } from 'react';
import baseApi from '../baseApi';

export default function TopicForm({ onAdd }: { onAdd: () => void }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await baseApi.post('/topic/add', { name, description });
    setName('');
    setDescription('');
    onAdd(); // refresh list
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Topic name" required />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Add Topic</button>
    </form>
  );
}
