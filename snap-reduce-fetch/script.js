function fetchJson () {
	fetch('https://jsonplaceholder.typicode.com/todos')
		.then (response => response.json())
		.then (parsedResponse => {
			console.log(parsedResponse)
			document.getElementById('target').innerHTML = parsedResponse.reduce((accumulator, currentValue) => {
				return `${accumulator}
				<div class='card'>
				<div class='card-body'>
					<h5 class='card-title'>${currentValue.title}</h5>
					<p class='card-text'>${currentValue.id}</p>
					<p class='card-text'>${currentValue.completed}</p>
				</div>
				</div>`
				}, '')
		})
}
fetchJson()