const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/api/v1/', (req, res) => {
    res.status(200).json({
        msg: 'Success',
        title: 'MP Food'
    })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
