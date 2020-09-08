const app =require('./src/app')
const port = 5000||process.env.PORT
app.listen(port, () => console.log(`Example app listening on port ${port}!`))