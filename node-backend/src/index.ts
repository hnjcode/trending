import express from 'express';
import topicRouter from './routes/topic';
import cors from 'cors';
import { producer } from './kafka/kafkaClient';

const app = express();
app.use(cors({
  origin: 'http://localhost:3001', // React runs here
}));
app.use(express.json());
app.use('/api/topic', topicRouter); // Prefix all routes in topicRouter with /topic
(async () => {
  await producer.connect(); // connect once at app start
})();

app.listen(3000, () => console.log('Server is running on http://localhost:3000/'));
