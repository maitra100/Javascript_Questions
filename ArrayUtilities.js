let DoubleNumber = (numbers)=>{
	if(!Array.isArray(numbers)){
		throw new TypeError('unsupported input');
	}
	return numbers.map(num=> num*2);
};
// let numbers=2;
// console.log(DoubleNumber(numbers));

module.exports={DoubleNumber};