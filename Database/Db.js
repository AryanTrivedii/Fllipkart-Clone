const mongoose =require('mongoose')
const url =`mongodb+srv://aryantrivedi1232015:FLhIJ9mdW4B6OHaF@ecommerce.tdjksvf.mongodb.net/?retryWrites=true&w=majority`

const Connection=async()=>{
 try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })  
  console.log("Database Connected ✔")
    } catch (error) {
      console.log("Failure in the Connection ❌ ")  
    }
}

module.exports=Connection