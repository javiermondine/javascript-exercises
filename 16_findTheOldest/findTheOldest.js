const findTheOldest = function(people) {
  return people.reduce((oldest, current) => {
    const currentAge = (current.yearOfDeath || new Date().getFullYear()) - current.yearOfBirth;
    const oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
    return currentAge > oldestAge ? current : oldest;
  });
};

module.exports = findTheOldest;
