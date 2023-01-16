const {func1,func2}=require('./q1');

test('find the largest even number in array',()=>{
	expect(
		func1([1,2,3,4,5])
	).toBe(4);
}); 

test('find the largest even number in array',()=>{
	expect(
		func1([1,3,5,7])
	).toBe(-1);
});

test('find the largest even number in array',()=>{
	expect(
		func2([1,2,3,4,5])
	).toBe(4);
}); 

test('find the largest even number in array',()=>{
	expect(
		func2([1,3,5,7])
	).toBe(-1);
});

