import { useState } from 'react';
import TopicForm from './components/TopicForm';
import TopicList from './components/TopicList';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleAdd = () => setRefresh(!refresh);

  return (
    <div>
      <h1>Topics</h1>
      <TopicForm onAdd={handleAdd} />
      <TopicList refresh={refresh} />
    </div>
  );
}

export default App;
