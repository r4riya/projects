let mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/thapadb', {useNewUrlParser: true, useUnifiedTopology: true});
const bioData = mongoose.model('bioData', {
   
 name: String,
    age: Number
  });

const newRecord = new bioData({ name: 'nirmalya' });
newRecord.save().then(() => console.log('saved'));
bioData.create({
    name:"random",
    age:20
}).then(data => {
    console.log(data)
})



