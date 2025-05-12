// src/routes/topic.ts
import { Router, Request, Response, RequestHandler } from 'express';
import db from '../db'; // Adjust path as needed
import { Topic } from '../types/Topic'; // Adjust path as needed

const router = Router();

router.post('/add', async (req: Request, res: Response) => {
  const { name, description } = req.body;

  if (!name) {
    res.status(400).json({ error: 'Name is required' });
  }

  try {
    const result = await db.query<Topic>(
      'INSERT INTO topic (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

// GET /api/topic/get
router.get('/get', async (_req: Request, res: Response) => {
  try {
    const result = await db.query<Topic>('SELECT * FROM topic ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
