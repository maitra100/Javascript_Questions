const {func1,func2}=require('./q4');

test('find longest string from given array',()=>{
	expect(
		func1(['we', 'love', 'code', 'academy'])
	).toBe('academy');
}); 

test('find longest string from given array',()=>{
	expect(
		func2(['we', 'love', 'code', 'academy'])
	).toBe('academy');
}); 