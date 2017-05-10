// var	myHeading = document.querySelector('h1');
// myHeading.textContent='Hello word!';
document.querySelector('html').onclick=function(){};
// Каруселька 3 фотографий
var myImage=document.querySelector('img');
myImage.onclick=function (){
	var mySrc=myImage.getAttribute('src');
// 1-ый вариант, Условный (тернарный) оператор, 
// часто используется в качествее укороченного варианта 
// условного оператора if.
mySrc==='images/one.jpg'? 
myImage.setAttribute ('src','images/two.jpg'):
mySrc==='images/two.jpg'?
myImage.setAttribute ('src','images/three.jpg'):
myImage.setAttribute ('src','images/one.jpg');
// 2-ой вариант,  усливие elseif
	// if(mySrc==='images/one.jpg') {
	// 	myImage.setAttribute('src','images/two.jpg');
	// } 
	// else if(mySrc==='images/two.jpg') {
	// 	myImage.setAttribute ('src','images/three.png');
	// }
	// else{
	// 	myImage.setAttribute('src','images/one.jpg');
	// }
}
var	myButton=document.querySelector('button');
var	myHeading=document.querySelector('h1');
function setUseName(){
	var myName= prompt('Введите ваше имя');
// мы вызываем API под названием localStorage, 
// которое позволяет нам сохранять данные в браузере и 
// извлекать их позднее. Мы используем функцию 
// setItem() из localStorage для создания и хранения данных 
// в свойстве под названием 'name', и устанавливаем это 
// значение в переменную myName, которая содержит имя 
// введенное пользователем. 
localStorage.setItem('name',myName);
myHeading.innerHTML='Привет, '+ myName;	
}
if (!localStorage.getItem('name')) {
setUseName();
}else{
	var	storedName=localStorage.getItem('name');
	myHeading.innerHTML='Привет, '+storedName;
}
myButton.onclick=function () {
	setUseName();
}



//Не по теме

// просто функция
// function one(a,b) {
// 	var	result=a*b;
// 	return result;
// }
// Понимание объекта в переменной
// var car = {cars:{a:"vaz", b:"zaz", "c":"maz"},d:"zil"};
/*Cобытие при нажатии
document.querySelector('h1').onclick=function () {
	alert ('Ой! Перестань тыкать меня! (:')
}*/
// Логика
// var name=prompt('кто ты?', '');
// if (name=='Админ') {
// 	var pass= prompt('пароль','');

// 	if (pass=='тыж программист') {
// 		alert('здорова,'+' '+ pass);
// 	}else if (pass==null) {
// 		alert('Отмена');
// 	}else{
// 		alert('Неверный пароль');
// 	}
// }else if (name==null) {
// 	alert('Отмена');
// }else { 
// 	alert('Похоже ты не Админушка!');
// }



//------эксперименты (:
// function fn(1,2) {
// 	return a+b;
// }
// console.log(fn());
// var f=fn();
// alert('f=' + f);
// function returnFnResult(fn) {
//     return fn();
// }

// function sum(arg1,arg2)
// {
// 	var a=arg1+arg2;
// 	return a;
// }
// var b=sum(5,2);
// alert(b);
 
// function add()
// {
// 	var c=1+sum(1,2);
// 	return c;
// }
// var d=add();
// alert(d);