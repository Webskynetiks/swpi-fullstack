const mongoose =require('mongoose')

const connectDB =async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(
            `connected to mongodb database ${mongoose.connection.host}`.bgMagenta.white
        );
    } catch (error) {
        console.log("MONGO connect Error" .bgRed.white)
        
    }
}


module.exports = connectDB;





// Techinfo YT