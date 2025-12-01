const express = require('express');
const app = express();
const port = 80;

app.use(express.static('frontend/dist')); //обращаемся к билду проекта

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
