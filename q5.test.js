const {func1,func2}=require('./q5');

test('check whether given year is leap year or not',()=>{
	expect(
		func1(2000)
	).toBe(true);
}); 

test('check whether given year is leap year or not',()=>{
	expect(
		func2(2000)
	).toBe(true);
}); 