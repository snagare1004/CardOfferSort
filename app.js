const express = require('express');
const app = express();
const config = require('./config.json')
const PORT = config.port || 3000;
let ProcessCard = require('./processcard')
app.use(express.json());


app.post('/minCharges', ProcessCard)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
