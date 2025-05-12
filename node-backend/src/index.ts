import express from 'express';
import topicRouter from './routes/topic';
import cors from 'cors';

const app = express();
app.use(cors({
  origin: 'http://localhost:3001', // React runs here
}));
app.use(express.json());
app.use('/api/topic', topicRouter); // Prefix all routes in topicRouter with /topic

app.listen(3000, () => console.log('Server is running on http://localhost:3000/'));
