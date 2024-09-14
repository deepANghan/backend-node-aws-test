import express from 'express'

const app = express();

app.get("/", (req, res) => {

    res.status(200).json({
        msg:"got the page"
    })
})

app.listen(3000, () => console.log('server started'));