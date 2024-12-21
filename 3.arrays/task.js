function compareArrays(arr1, arr2) {
    return arr1.every((el, idx) => arr1.length === arr2.length && el === arr2[idx]);  
module.exports = {
  compareArrays
}
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(user => user.gender === gender).reduce((acc, user, index, users) => acc += user.age / users.length, 0 );
    }
module.exports = {
  getUsersNamesInAgeRange
}
