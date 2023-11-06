const express = require('express'),
    path = require('path')

const app = express();
    port = process.env.PORT || 3000

    const dotenv = require('dotenv'),
    { Client } = require('pg')
    dotenv.config()
    const client = new Client({
        connectionString: process.env.PGURI
      })
      
      client.connect()


app.get('/api/exercises/:category', async (request, response) => {
    const category = request.params.category;
    try {
      const { rows } = await client.query(
        'SELECT * FROM exercise WHERE category = $1',
        [category]
      );
      response.json(rows);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.use(express.static(path.join(path.resolve(), 'public')))


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
