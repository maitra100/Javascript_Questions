const {func1,func2}=require('./q3');

test('convert lowercase characters to uppercase and vice-versa',()=>{
	expect(
		func1('MeRRy hAD a LITTle lAMp')
	).toBe('mErrY Had A littLE LamP');
}); 

test('convert lowercase characters to uppercase and vice-versa',()=>{
	expect(
		func2('MeRRy hAD a LITTle lAMp')
	).toBe('mErrY Had A littLE LamP');
}); 
