const mongoose = require('mongoose');

const conexion = async () =>{
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    console.log(con.connection.host)
  } catch (error) {
    console.log(error)
  }
}

module.exports = conexion