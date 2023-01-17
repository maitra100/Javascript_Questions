const {TripleEvenNumber,TripleEvenNumberReduce}=require('./TripleEvenNumbers.js');



describe('Array Utilities',()=>{
	describe('Triple Even Numbers',()=>{
		it('should Triple all numbers and filter out even numbers when supported input is given',()=>{
			let ans=TripleEvenNumber([2,4,6]);
			console.log(ans);
			expect(ans).toEqual([6,12,18]);
		});
		it('should throw a error when unsupported input is goven',()=>{
			expect(() => TripleEvenNumber(2)).toThrow('Unsupported input');
		});
	});
});

describe('Array Utilities',()=>{
	describe('Triple Even Numbers',()=>{
		it('should Triple all numbers and filter out even numbers when supported input is given',()=>{
			let ans=TripleEvenNumberReduce([2,3,4,5]);
			console.log(ans);
			expect(ans).toEqual([6,12]);
		});
		it('should throw a error when unsupported input is goven',()=>{
			expect(() => TripleEvenNumberReduce(2)).toThrow('Unsupported input');
		});
	});
});