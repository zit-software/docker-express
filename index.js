const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Server is running',
        href: 'https://fb.com/zit-software'
    })
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
