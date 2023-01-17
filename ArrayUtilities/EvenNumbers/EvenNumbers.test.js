const {EvenNumber}=require('./EvenNumbers.js');



describe('Array Utilities',()=>{
	describe('Even Numbers',()=>{
		it('should filter out even numbers when supported input is given',()=>{
			let ans=EvenNumber([2,4,6,7]);
			console.log(ans);
			expect(ans).toEqual([2,4,6]);
		});
		it('should throw a error when unsupported input is goven',()=>{
			expect(()=>EvenNumber(2)).toThrow(TypeError);
		});
	});
});