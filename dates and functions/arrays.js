var arr=[8, 90, 5, 7, 0, 8, 9];
console.log(arr.join(", ")); //массив представляется в виде строки, где элементы массива разделены , (могу указать что угодно)
console.log(arr.sort()); //сортирует, выведет 0,5,7,8,8,9,90
console.log(arr.reverse()); //массив наоборот
var stroka=arr.join(", ");
console.log(stroka.split(", ")); //массив, состоящий из строк, т.к. split разбивает строку на элементы
