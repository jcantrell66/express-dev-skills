const skills = [
    { id: 10, skill: 'javascript', learned: true },
    { id: 11, skill: 'CSS', learned: true },
    { id: 12, skill: 'express', learned: false }
  ];
  
  module.exports = {
      getAll,
      getOne
  };


  function getAll() {
    return skills;
  }

  function getOne() {
    return skills.find(skill => skill.id === parseInt(id));
  }