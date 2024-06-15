import cors from 'cors';
import express from 'express';
import { Request, Response } from 'express';
import * as pkg from 'pg';
import * as dotenv from 'dotenv'

const { Client } = pkg;

dotenv.config()

const client = new Client({
  connectionString: process.env.PGURI
})

client.connect()

const app = express()

app.use(cors())

app.get('/api/exercises/:category', async (request: Request, response: Response) => {
  const category = request.params.category;
  try {
    const { rows } = await client.query('SELECT * FROM exercise WHERE category = $1', [category]);
    response.send(rows);
  } catch (error) {
    console.error('Error:', error);
    response.status(500).send('Serverfel');
  }
});

app.listen(3000, () => {
  console.log('Webbtjänsten kan nu ta emot anrop.')
})