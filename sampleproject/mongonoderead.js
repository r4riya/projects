let mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/thapadb', {useNewUrlParser: true, useUnifiedTopology: true});

const bioData = mongoose.model('bioData', {
    name: String,
    age: Number
  });

  bioData.find({name:"nirmalya"}).then(data => {
    console.log(data[0])
})

