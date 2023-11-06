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

//kommer åt backend
app.get('/api', async (_request, response) => {
    const { rows } = await client.query(
      'SELECT * FROM cities WHERE name = $1',
      ['Stockholm']
    )
  
    response.send(rows)
  })
//kommer åt frontend
app.use(express.static(path.join(path.resolve(), 'public')))


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
