const express = require('express');
const app = express();
const port = 3000;

// Định tuyến URL
app.get('/', (req, res) => {
    res.send('<p>This is the home page</p>');
});

app.get('/product', (req, res) => {
    res.send('This is the product page');
});

app.get('/add-product', (req, res) => {
    res.send('<form action="/product" method="POST"><input type="text" name="productName"><button type="submit">Add Product</button></form>');
});

app.listen(port, () => {
    console.log(`App đang chạy trên cổng: ${port}`);
});
