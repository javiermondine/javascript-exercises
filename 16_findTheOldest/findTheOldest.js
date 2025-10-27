const findTheOldest = function(people) {
  let oldest = people[0];
  let maxAge = 0;
  
  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    const deathYear = person.yearOfDeath || new Date().getFullYear();
    const age = deathYear - person.yearOfBirth;
    
    if (age > maxAge) {
      maxAge = age;
      oldest = person;
    }
  }
  
  return oldest;
};

module.exports = findTheOldest;
