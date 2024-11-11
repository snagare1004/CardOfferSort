const express = require('express');
const app = express();
const config = require('./config.json')
const PORT = config.port || 3000;
app.use(express.json());

const Routes = require('./routes');
app.use('/api', Routes);
// app.post('/minCharges', ProcessCard)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
