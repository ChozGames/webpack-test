function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = "test"

  return element;
}

window.addition = function() {
	let element = document.createElement('p')
	let n1 = parseInt(document.getElementById("number1").value)
	let n2 = parseInt(document.getElementById('number2').value)
	if (!isNaN(n1) && !isNaN(n2)) {
		let addition =  n1 + n2
		document.getElementById("resultat").innerHTML = "Resultat : " + addition
		console.log('Operation reussi')
	} else {
		document.getElementById("resultat").innerHTML = "Saissisez une operation"
	}

	
	
	return element
}

// document.body.appendChild(component());
