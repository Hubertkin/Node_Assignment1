
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000


app.use(express.json());

app.get('',function getUsers (req,res){
  try{
  res.status(200).json({
    "Users": [
        {
            "first_name": "Hubert ",
            "last_name": "Ocran",
            "date_of_birth": "2005-04-10T23:00:00.000Z",
            "school": "Bosome Senior High Tech School",
        },
        {
            "first_name": "Gabriel ",
            "last_name": "Owusu-Ansah",
            "date_of_birth": "1995-09-08T23:00:00.000Z",
            "school": "Kumasi Technical University",
        },
        {
            "first_name": "Joseph ",
            "last_name": "kwakye",
            "date_of_birth": "1999-08-09T23:00:00.000Z",
            "school": "Kwame Nkrumah University Of Science And Technology"
        }
    ]

})}catch (error){
  console.log('Can\'t get users : ',error.message);     
  res.status(404).json({message :'Can\'t get users ', error:error.message})
}
});

app.post('',function addUser (req,res){
  try{
  res.status(200).json({message: 'User has been created'})
}catch(error){
  console.log('Can\'t add user: ',error.message);     
  res.status(404).json({message :'Can\'t add user ', error:error.message})
}
})





app.listen(PORT, function () {
    console.log('Server has started to run');

  
  })