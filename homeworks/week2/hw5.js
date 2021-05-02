function join(arr, concatStr) {
	var output = ""
	for(i=0;i<arr.length;i++){
		output += arr[i]
		if(i === arr.length - 1){
			return output
		}else{
			output += concatStr
		}
	}
}

function repeat(str, times) {
	var output = ""
	for(i=0;i<times;i++){
		output += str
	}
	return output
}

console.log(join(['a',"b","c"], '!'));
console.log(repeat('a', 5));
