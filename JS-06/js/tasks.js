"use strict";
import users from "./users.js";
console.log("users :", users);

// Задание 1
// Получить массив имен всех пользователей (поле name).

// const getUserNames = users => {
//   // твой код
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Решение 1 №1
// const getUserNames = users => {
//   const usersArr = users.map(el => el.name);
//   return usersArr;
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Решение 1 №2
// const getUserNames = users => {
//   let usersArr = [];
//   users.forEach(el => usersArr.push(el.name));
//   return usersArr;
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ==========================================
// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   // твой код
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Решение 2
// const getUsersWithEyeColor = (users, color) => {
//   const colorFilter = users.filter(el => el.eyeColor === color);
//   return colorFilter;
// };

// console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ==========================================
// Задание 3
// Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => {
//   // твой код
// };

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Решение 3
// const getUsersWithGender = (users, gender) => {
//   const genderFilter = users
//     .filter(el => el.gender === gender)
//     .map(el => el.name);
//   return genderFilter;
// };

// console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ==========================================
// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => {
//   // твой код
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Решение 4
// const getInactiveUsers = users => {
//   const InactiveArr = users.filter(el => !el.isActive);
//   return InactiveArr;
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ==========================================
// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
//   // твой код
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// Решение 5
// const getUserWithEmail = (users, email) => {
//   const usersArr = users.find(el => el.email === email);
//   return usersArr;
// };

// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// ==========================================
// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) => {
//   // твой код
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Решение 6
// const getUsersWithAge = (users, min, max) => {
//   const usersArr = users.filter(el => el.age < max && el.age > min);
//   return usersArr;
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ==========================================
// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//   // твой код
// };

// console.log(calculateTotalBalance(users)); // 20916

// Решение 7
// const calculateTotalBalance = users => {
//   const totalBalance = users.reduce(
//     (usersBalance, el) => usersBalance + el.balance,
//     0
//   );
//   return totalBalance;
// };

// console.log(calculateTotalBalance(users)); // 20916

// ==========================================
// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//   // твой код
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Решение 8
// const getUsersWithFriend = (users, friendName) => {
//   const usersFriend = users
//     .filter(el => el.friends.includes(friendName))
//     .map(el => el.name);
//   return usersFriend;
// };

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// ==========================================
// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => {
//   // твой код
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Решение 9
// const getNamesSortedByFriendsCount = users => {
//   const usersArr = users
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(el => el.name);
//   return usersArr;
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// ==========================================
// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//   // твой код
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Решение 10 №1
// const getSortedUniqueSkills = users => {
//   let resArr = [];
//   const newArr = users.map(el => (resArr = [...resArr, ...el.skills]));

//   const skillsArr = resArr.filter((item, idx) => {
//     return idx === resArr.indexOf(item);
//   });
//   return skillsArr.sort();
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Решение 10 №2
// const getSortedUniqueSkills = users => {
//   const skills = [];
//   users.forEach(element => {
//     skills.push(...element.skills);
//   });

//   const unique = [];
//   skills.forEach(el => {
//     !unique.includes(el) && unique.push(el);
//   });

//   return unique.sort();
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Решение 10 №3
// const getSortedUniqueSkills = users => {
//   const unique = users
//     .reduce((acc, el) => {
//       acc.push(...el.skills);
//       return acc;
//     }, [])
//     .reduce((acc, el) => {
//       !acc.includes(el) && acc.push(el);
//       return acc;
//     }, [])
//     .sort();
//   return unique;
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
