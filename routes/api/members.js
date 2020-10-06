const express = require('express');
const router = express.Router(); // we import express' router
const uuid = require('uuid');

const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Bob Williams',
        email: 'bob@gmail.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Shannon Jackson',
        email: 'shannon@gmail.com',
        status: 'active'
    }
]



// Gets All Members
router.get('/', (req,res) => {
    res.json(members) // It is used to return your data in JSON format
})

// Get Single Member
router.get('/:id', (req,res) => { // When we use the main url which is /api/members in this case in server.js app.use(), we don't have to write here.
    const found = members.some(member => member.id === parseInt(req.params.id)) // some method checks if any of the elemnts in an array pass a test (provided as a function)
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    }
    else{
        res.status(400).json({msg: 'Member not found!!'}) // Setting http status
    }

})

// Create a member
router.post('/', (req,res) => {
    const newMember = {
        "id" : uuid.v4(),
        "name" : req.body.name,
        "email" : req.body.email,
        "status" : 'active'
    }
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg: 'Name and Email Fields cannot be empty!!!'}) // we use return so we dont use else statement
    }
     
    members.push(newMember);
    res.json(members);
    //res.redirect('/') // redirect after making post request from frontend's form.
})


// Update a member
router.put('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id)) // some method checks if any of the elemnts in an array pass a test (provided as a function)
    if(found){
        const updatedMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updatedMember.name ? updatedMember.name : member.name;
                member.email = updatedMember.email ? updatedMember.email : member.email;
            }
        })
        res.json(members);
    }
    else{
        res.status(400).json({msg: 'Member not found!!'}) // Setting http status
    }
})



// Delete a Member
router.delete('/:id', (req,res) => { // When we use the main url which is /api/members in this case in server.js app.use(), we don't have to write here.
    const found = members.some(member => member.id === parseInt(req.params.id)) // some method checks if any of the elemnts in an array pass a test (provided as a function)
    if(found){
        res.json({msg: 'Member deleted', members: members.filter(member => member.id !== parseInt(req.params.id))})
    }
    else{
        res.status(400).json({msg: 'Member not found!!'}) // Setting http status
    }

})

module.exports = router;