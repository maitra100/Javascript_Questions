/* eslint-disable no-mixed-spaces-and-tabs */
let TripleEvenNumber = (numbers)=>{
	if(!Array.isArray(numbers)){
		throw new TypeError('Unsupported input');
	}
	let TripleNumbers=numbers.map(num=> num*3);
	let TripleEvenArr=TripleNumbers.filter(x=>x%2==0);
	return TripleEvenArr;
};
// let numbers=2;
// console.log(DoubleNumber(numbers));
let TripleEvenNumberReduce = (numbers)=>{
	if(!Array.isArray(numbers)){
		throw new TypeError('Unsupported input');
	}
	let ans=numbers.reduce((AnsArr,CurrentValue)=>{
	  if((CurrentValue)%2==0){
		    AnsArr.push((CurrentValue*3));
		}
		return AnsArr;
	},[]);
	return ans;
};
// console.log(TripleEvenNumberReduce([2,3,4,5]));
module.exports={TripleEvenNumber,TripleEvenNumberReduce};