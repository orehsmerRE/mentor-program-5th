function capitalize(str) {
	var output =""
	output += str[0].toUpperCase()
	for(i=1;i<str.length;i++){
		output += str[i]
	}
	return output
}

console.log(capitalize('hello'));
