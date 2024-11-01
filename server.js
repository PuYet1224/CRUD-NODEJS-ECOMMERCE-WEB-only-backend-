const app = require('./src/app')

const PORT = process.env.PORT || 3055

app.listen(PORT, () =>{
    console.log(`CRUD eCommerce start with ${PORT}`)
}) 
//FILE CAN NOT TOUCH