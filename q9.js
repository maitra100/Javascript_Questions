let str="codeacademy"
function func1(str){
    let len=str.length
    let ans=""
    for(let i=0;i<len;i++){
        let code=str.charCodeAt(i)
        code++;
        ans+=String.fromCharCode(code)
    }
    return ans;
}

func2 = (str) => {
    let len=str.length
    let ans=""
    for(let i=0;i<len;i++){
        let code=str.charCodeAt(i)
        code++;
        ans+=String.fromCharCode(code)
    }
    return ans;
}

console.log(func1(str))
console.log(func2(str))