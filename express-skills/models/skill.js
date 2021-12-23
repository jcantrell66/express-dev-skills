const skills = [
    { id: 1, skill: 'javascript', learned: true },
    { id: 2, skill: 'CSS', learned: true },
    { id: 3, skill: 'express', learned: false }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

//this passes all objects to the controller
function getAll() {
    return skills;
}

//this passes just the skill that the user clicked on based on the ids of the objects
function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

//this creates a new skill with the input the user gave
function create(newSkill) {
    newSkill.id = skills.length + 1;
    newSkill.learned = true;
    skills.push(newSkill);
}

//this matches the id of the skill that the user wants to delete with the id of the
//item in the database, and splices it
function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}