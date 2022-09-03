let user = {};

user.name = "Пилип";
user.surname = "Шевченко";
console.log(user);

user.name = "Сергій";
console.log(user);

delete user.name;
console.log(user);