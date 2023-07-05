const skillModel = require("../models/skill");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  new: newSkill,
};

function index(req, res, next) {
  res.render("skills/index.ejs", { skills: skillModel.getAll() });
}

function create(req, res) {
  console.log(req.body)
  const skill = skillModel.create(req.body)
  res.redirect(`/skills/${skill.id}`)
}

function deleteOne(req, res,) {
  skillModel.deleteOne(req.params.id)
  res.redirect("/");
}

function newSkill(req, res){
  res.render('skills/new') // <- This is not a url 
  // file path referring to the views folder  
 }

function show(req, res) {
  console.log(req.params);
  const skill = skillModel.getOne(req.params.id);
  res.render("skills/show", { skill: skill });
}

function create(req,res){
  console.log(req.body)
  const skill = skillModel.create(req.body)
  res.redirect(`/skills/${skill.id}`)
}
