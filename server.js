const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Раздаем статику (для картинок и стилей)
app.use(express.static(path.join(__dirname, 'public')));

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Товарищ! Сервер запущен по адресу: http://localhost:${PORT}`);
});