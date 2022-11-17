const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://rish:rish123@incubation.ufgyi6z.mongodb.net/test',{
    useNewUrlParser:true,
   
}).then(()=>{
    console.log('db connected');
}).catch((e)=>{
    console.log(e)
    console.log('db not connected');
})