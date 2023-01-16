const {DoubleNumber}=require('./ArrayUtilities.js');



describe('Array Utilities',()=>{
	describe('Double Numbers',()=>{
		fit('should double the numbers when supported input is given',()=>{
			let ans=DoubleNumber([2,4,6]);
			console.log(ans);
			expect(ans).toEqual([4,8,12]);
		});
		it('should throw a error when unsupported input is goven',()=>{
			let ans=DoubleNumber(2);
			console.log(ans);
			expect(() => ans).toThrow('Unsupported type');
		});
	});
});