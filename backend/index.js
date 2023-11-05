const express = require('express'),
    path = require('path')

const app = express();
    port = process.env.PORT || 3000


//kommer åt backend
app.get('/api', (req, res) => {
    res.send({ hello: 'World' });
})
//kommer åt frontend
app.use(express.static(path.join(path.resolve(), 'public')))


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
