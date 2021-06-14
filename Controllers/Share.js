const  Share  = require('../Models/Share');
const { body, validationResult } = require('express-validator');



const findArticle= async (req , res)=>{
 const returnPost = await Share.find();
     return res.send(returnPost)
     
}
const findSpecifiArticle= async (req , res)=>{
 const returnSpecificPost = await Share.find({_id:req.params.id});
     return res.send(returnSpecificPost)
    
}

//la partie creation
 const createArticle = async  (req, res) => {
//     // Finds the validation errors in this request and wraps them in an object with handy functions
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }
    const Sharing = new Share(req.body);
    const article = await Sharing.save();
    return res.send(article);
    }

//la partie edit et deliete :
//    //PUT : EDIT A USER BY ID 
  const findandUpdateArticle = async ( req , res)=>{
  const updatedPost = await Share.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
  return res.send(updatedPost)
  }


//   //   DELETE : REMOVE A USER BY ID 
    const deleteArticle = async (req,res)=>{
      const deltedPost = await Share.findByIdAndRemove({_id:req.params.id});
     return res.send(deltedPost)
  }



module.exports = {
   findArticle,
    createArticle,
  findandUpdateArticle,
  deleteArticle,
  findSpecifiArticle
}