let year=1900;
function func1(year){
	return year%400==0 || (year%4==0 && year%100!=0)?true:false;
}

let func2 = (year) => year%400==0 || (year%4==0 && year%100!=0)?true:false;

console.log(func1(year));
console.log(func2(year));

module.exports={func1,func2};