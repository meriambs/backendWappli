const  Profile = require('../Models/Profile');
const User = require ('../Models/User');
const { body, validationResult } = require('express-validator');
const { Router } = require('express');

const sayProfil = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res
        .status(400)
        .json({ message: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const upDatedProfil  =  async (req, res) => {
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
     try {
       let profile = await Profile.findOne({ user: req.user.id });

       if (profile) {
         //Update if there is a profile
        profile = await Profile.findOneAndUpdate(
           { user: req.user.id },
           { $set: profileFields },
           { new: true }
         );

        return res.json(profile);
      }

       profile = new Profile(profileFields);
       await profile.save();
       res.json(profile);
     } catch (error) {
       console.error(error.message);
       res.status(500).send("Server Error");
   }
   
  
  
  
  };



const getAllProfil = async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(  "Server Error" );
  }
}

//get profil by id : 

const getProfId= async (res,req)=>{
  try{
    const profileUser = await Profile.findOne({user:req.params.user_id}).populate('user',['name','avatar']);
    if(!profileUser) return res.status(400).json({msg:'profil not found '});
    res.json(profileUser);
  }catch(err){
    console.error(err.message);
    if(err.king == "ObjectId"){
      return res.status(400).json({msg:'Profile not found'})
    }
    res.status(500).send('Server error')
  }
}
//delete request : 
 const deleteprofil= async (res,req)=>{
   try{
     //remove profil
      await Profile.findOneAndRemove({user: req.user.id});
      
     //remove user
     await User.findOneAndRemove({ _id: req.user.id});

     res.json({msg:'User removed'});
   }catch (err) {
    console.error(err.message);
    res.status(500).send(  "Server Error" );
  }
 }
//partie ajout delement au profil : 
//put profil experience
const profilExperience=async(res,req)=>{
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
} 

const{
  school,
  degree,
  fieldofstudy
} = req.body ;

const newExp = {
     school,
  degree,
  fieldofstudy
};

try {
  const pprofil= await Profile.findOne({user:req.user.id});
  pprofil.education.unshift(newExp);
  await pprofil.save();
  res.json(pprofil);

}catch(err){
  console.error(err.message);
  res.status(500).send('Server error')
}}

module.exports = {
    sayProfil,
    upDatedProfil,
    getAllProfil,
    getProfId,
    profilExperience,
    deleteprofil
}