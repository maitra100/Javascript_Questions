let str='javaScript';
function func1(str){
	return str.endsWith('Script');
}

let func2 = (str) => {
	return str.endsWith('Script');
};

console.log(func1(str));
console.log(func2(str));

module.exports={func1,func2};