const {func1,func2}=require('./q2');

test('check if all digits in number are same',()=>{
	expect(
		func1(22)
	).toBe(true);
}); 

test('check if all digits in number are same',()=>{
	expect(
		func1(23)
	).toBe(false);
});

test('check if all digits in number are same',()=>{
	expect(
		func2(22)
	).toBe(true);
}); 

test('check if all digits in number are same',()=>{
	expect(
		func2(23)
	).toBe(false);
});