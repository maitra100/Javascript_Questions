let EvenNumber = (numbers)=>{
	if(!Array.isArray(numbers)){
		throw new TypeError('unsupported input');
	}
	return numbers.filter(x=>x%2==0);
};

module.exports={EvenNumber};