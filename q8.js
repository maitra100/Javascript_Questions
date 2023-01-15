let str="codeacademy"
function func1(str){
    let ans=0,len=str.length;
    for(let i=0;i<len;i++){
        if(str[i]=='a' || str[i]=='u' ||str[i]=='o' ||str[i]=='i' ||str[i]=='e')
        ans++;
    }
    return ans;
}

func2 = (str) => {
    let ans=0,len=str.length;
    for(let i=0;i<len;i++){
        if(str[i]=='a' || str[i]=='u' ||str[i]=='o' ||str[i]=='i' ||str[i]=='e')
        ans++;
    }
    return ans;
}

console.log(func1(str))
console.log(func2(str))

module.exports={func1,func2};