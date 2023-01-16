let str='MeRRy hAD a LITTle lAMp';
function func1(str){
	let len=str.length;
	let ans='';
	for(let i=0;i<len;i++){
		if(str[i]==str[i].toLowerCase()){
			ans+=str[i].toUpperCase();
            
		}
		else{
			ans+=str[i].toLowerCase();
		}
	}
	return ans;
}

let func2 = (str) => {
	let len=str.length;
	let ans='';
	for(let i=0;i<len;i++){
		if(str[i]==str[i].toLowerCase()){
			ans+=str[i].toUpperCase();
            
		}
		else{
			ans+=str[i].toLowerCase();
		}
	}
	return ans;
}; 

console.log(func1(str));
console.log(func2(str));

module.exports={func1,func2};