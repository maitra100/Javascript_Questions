const arr = [23,2,4,2,5,44,43,45];
function func1(arr){
	let len=arr.length;
	let ans=-1;
	for(let i=0;i<len;i++){
		let remd=arr[i]%2;
		if(remd===0){
			ans=Math.max(ans,arr[i]);
		}
	}
	return ans;
}

let func2 = (arr) => {
	let len=arr.length;
	let ans=-1;
	for(let i=0;i<len;i++){
		let remd=arr[i]%2;
		if(remd===0){
			ans=Math.max(ans,arr[i]);
		}
	}
	return ans;
}; 

console.log(func1(arr));
console.log(func2(arr));

module.exports={func1,func2};