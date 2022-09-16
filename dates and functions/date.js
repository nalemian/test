var date = new Date(); //date - объект
console.log(date.getFullYear); //выводит нынешний год
//getMonth - начинает с 0, т.е. январь это 0
//есть ещё методы getDate, getHours, getMinutes, getSeconds
date.setHours(23); //устанавливаю своё время
console.log(date.getHours); //23
