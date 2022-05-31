function formatNumber(num) {
   let arr = String(num).split('');
   if(arr.includes('.')){
   for(let i = arr.length-1; i >= 0; i--){
	   if (arr[i] === '.'){
		   for(let j = i - 3; j > 0; j -= 3){
			   arr.splice(j, 0, ',');
		   }
	   }
   }
}else{
    for(let k = arr.length - 3; k > 0; k -= 3){
        arr.splice(k, 0, ',');
    }
}
   console.log(arr.join(''));
}

formatNumber(12345678999);