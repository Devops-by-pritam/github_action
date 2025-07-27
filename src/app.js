const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Hello from OpenShift Node.js app!  i changes this and deployment is automated|| after push if woekflows is successful you can see this in browser ");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
