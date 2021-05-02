function reverse(str) {
	var output =""
	for (i=1;i<=str.length;i++){
		output += str[str.length-i]
	}
	console.log(output)
}

reverse('hello');
