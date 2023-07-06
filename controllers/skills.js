const skillModel = require("../models/skill");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  new: newSkill,
  edit,
  update,
};

function index(req, res, next) {
  res.render("skills/index.ejs", { skills: skillModel.getAll() });
}

function create(req, res) {
  console.log(req.body);
  const skill = skillModel.create(req.body);
  console.log(skill);
  res.redirect("/skills/");
}

function edit(req, res) {
  const skill = skillModel.getOne(req.params.id);
  res.render("skills/edit", { skill });
}

function update(req, res) {
  const skill = skillModel.getOne(req.params.id);
  skillModel.update(req.params.id, req.body)
  res.redirect(`/skills/${req.params.id}`)
}

function deleteOne(req, res) {
  skillModel.deleteOne(req.params.id);
  res.redirect("/skills");
}

function newSkill(req, res) {
  res.render("skills/new"); // <- This is not a url
  // file path referring to the views folder
}

function show(req, res) {
  console.log(req.params);
  const skill = skillModel.getOne(req.params.id);
  res.render("skills/show", { skill: skill });
}
