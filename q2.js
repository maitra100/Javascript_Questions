let num=111;
function func1(num){
    let num_string=num.toString()
    let ans=true;
    let len=num_string.length
    let first_char=num_string[0];
    for(let i=1;i<len;i++){
        if(num_string[i]!==first_char)
        ans=false;
    }
    return ans;
}

func2 = (num) => {
    let num_string=num.toString()
    let ans=true;
    let len=num_string.length
    let first_char=num_string[0];
    for(let i=1;i<len;i++){
        if(num_string[i]!==first_char)
        ans=false;
    }
    return ans;
} 

console.log(func1(num))
console.log(func2(num))

module.exports={func1,func2};