import { useEffect, useState } from 'react';
import { Topic } from '../types/Topic';
import baseApi from '../baseApi';

export default function TopicList({ refresh }: { refresh: boolean }) {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    baseApi.get('/topic/get').then((res) => {
      setTopics(res.data);
    });
  }, [refresh]);

  return (
    <ul>
      {topics.map((t) => (
        <li key={t.id}>
          <strong>{t.name}</strong>: {t.description}
        </li>
      ))}
    </ul>
  );
}
