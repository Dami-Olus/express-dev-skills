const skills = [
  {
    id: 123,
    skill: "frontend development",
    level: "beginner",
    yearsOfExperience: 2,
  },
  {
    id: 124,
    skill: "backend development development",
    level: "beginner",
    yearsOfExperience: 2,
  },
  {
    id: 125,
    skill: "product development",
    level: "intermediate",
    yearsOfExperience: 5,
  },
  { id: 126, skill: "Communication", level: "expert", yearsOfExperience: 5 },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
  skill.id = Date.now() % 1000000
  skills.push(skill)
  return skill
}

function update() {}

function deleteOne(id) {
  const idx = todos.findIndex(todo => todo.id === parseInt(id))
  todos.splice(idx,1)
}
