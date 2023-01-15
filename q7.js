let str1="code"
let str2="academy"
function func1(arr){
    let st1=arr[0].substr(1);
    let st2=arr[1].substr(1);
    let ans=st1.concat(st2);
    return ans
}

func2 = (arr) => {
    let st1=arr[0].substr(1);
    let st2=arr[1].substr(1);
    let ans=st1.concat(st2);
    return ans
}

console.log(func1([str1,str2]))
console.log(func2([str1,str2]))

module.exports={func1,func2};