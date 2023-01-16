const {func1,func2}=require('./q6');

test('check whether string ends with "Script"',()=>{
	expect(
		func1('javaScript')
	).toBe(true);
}); 

test('check whether string ends with "Script"',()=>{
	expect(
		func2('javaScript')
	).toBe(true);
}); 