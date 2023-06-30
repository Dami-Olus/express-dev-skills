const skillModel = require("../models/skill");

module.exports = {
  index,
  show,
  create,
  deleteOne,
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
  res.redirect("skills");
}

function newTodo() {
  res.render("skills/new");
}

function show(req, res) {
  console.log(req.params);
  const skill = skillModel.getOne(req.params.id);
  res.render("skills/show", { skill: skill });
}
