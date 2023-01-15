let str1="code"
let str2="academy"
function func1(str1,str2){
    let st1=str1.substr(1);
    let st2=str2.substr(1);
    let ans=st1.concat(st2);
    return ans
}

func2 = (str1,str2) => {
    let st1=str1.substr(1);
    let st2=str2.substr(1);
    let ans=st1.concat(st2);
    return ans
}

console.log(func1(str1,str2))
console.log(func2(str1,str2))