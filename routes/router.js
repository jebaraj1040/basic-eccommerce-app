const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
	res.send("this is index page");
})
router.get('/contact/:id/:name',(req,res)=>{
	var parameters=req.params;
	res.send(parameters);
})
router.get('/career',(req,res)=>{
	res.send("node js openings..");
})

// exports used for this router file in another page example in app.js
module.exports=router;