const express = require('express')
const app = express()
const port = 3000
const path = require('path')
    // vào đường dẫn công khai sẽ vào được file publci
    // chỉ folder nào được static thì mới được xem
app.use('/congkhai', express.static(path.join(__dirname + '/public')))
app.get('/', (req, res) => {
    // nối file tĩnh
    var duongdan = path.join(__dirname + '/home.html')
    res.sendFile(duongdan)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})