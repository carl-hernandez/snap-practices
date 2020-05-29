function fetchJson () {
	fetch('https://jsonplaceholder.typicode.com/todos')
		.then (response => response.json())
		.then (parsedResponse => {
			let accumulator =''
			parsedResponse.forEach((currentValue) => {
				console.log(accumulator)
				accumulator= `${accumulator}
				<div class='card'>
				<div class='card-body'>
					<h5 class='card-title'>${currentValue.title}</h5>
					<p class='card-text'>${currentValue.id}</p>
					<p class='card-text'>${currentValue.completed}</p>
				</div>
				</div>`
				}

			)
			document.getElementById('target').innerHTML =accumulator
		})
}

fetchJson()