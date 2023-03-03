const express = require('express');

const app = express();
// const cors = require('cors');

// app.use(cors());

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server stated on port ${PORT}`));
