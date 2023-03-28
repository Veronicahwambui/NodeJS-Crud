const express = require('express')
const router = express.Router()
const uuid= require('uuid')
let users = require('../../User')

//get all users

router.get('/',(req, res) => {
    res.json(users)
})  

// get users by id

router.get('/:id',(req, res) => {
const find= users.some( users => users.id == parseInt (req.params.id))
   

    if (find){
        res.json( users.filter(users => users.id == parseInt (req.params.id)))
    } else {

        res.sendStatus(400)
    }

});

 // create a new user

 router.post('/create',(req, res) => {
   
    const Newuser = {

        id:uuid.v4(),
        name:req.body.name,
        email:req.body.email
    }
    if (!Newuser.name||!Newuser.email) {
        res.sendStatus(400)

    }else{
        users.push(Newuser)
        res.json(users)
    }
   


 });


 // update users
 router.put('/:id',(req, res) =>{

    const find =users.some(users => users.id === parseInt(req.params.id))

    if(find){
        const updateUsers=req.body;
        users.forEach(user => {
        if(user.id === parseInt(req.params.id)){
            user.name=updateUsers.name? updateUsers.name : user.name;
            user.email=updateUsers.email? updateUsers.email : user.email;
            res.json({msg:"user updated",user})
        }
            
        });
    }

})

// delete user

router.delete('/:id',(req,res)=>{

    const find =users.some(users=> users.id === parseInt(req.params.id));

    if(find){
        users= users.filter(users=>users.id !== parseInt(req.params.id));
        res.json({msg:"user deleted", users})
    }else{
        res.sendStatus(400)
    }

})


module.exports = router