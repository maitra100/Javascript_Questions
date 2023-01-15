let str_arr=["we", "lovesedfrf", "code", "academy"];
function func1(str_arr){
    let max_len=0;
    let len=str_arr.length;
    let ans;
    for(let i=0;i<len;i++){
        let str_len=str_arr[i].length
        if(max_len<str_len){
            max_len=str_len;
            ans=str_arr[i];
        }
    }
    return ans
}

func2 = (str_arr) => {
    let max_len=0;
    let len=str_arr.length;
    let ans;
    for(let i=0;i<len;i++){
        let str_len=str_arr[i].length
        if(max_len<str_len){
            max_len=str_len;
            ans=str_arr[i];
        }
    }
    return ans
} 

console.log(func1(str_arr))
console.log(func2(str_arr))

module.exports={func1,func2};