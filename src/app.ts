const express = require('express');

const app = express();
const PORT = 3000;
app.get('/', (req:any, res:any) => {
  res.send('<h1>Hello, Geeks!</h1><p>This is your simple Express server.</p>');
});
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
