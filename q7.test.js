const {func1,func2}=require('./q7');

test('concanate two strings excluding their first characters',()=>{
    expect(
        func1(["code", "academy"])
    ).toBe("odecademy")
}) 

test('check whether string ends with "Script"',()=>{
    expect(
        func2(["code", "academy"])
    ).toBe("odecademy")
}) 