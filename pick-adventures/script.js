function fetchJson () {
	const targetElement = document.getElementById('target')
	fetch('https://bootcamp-coders.cnm.edu/~gkephart/ng-demo7-backend/public_html/apis/users/')
		.then(reply => (reply.json()))
		.then(body => {

			//let array = Object.entries(body)
			let array = body.data
			console.log(array)
			let accumulator= ''
		array.forEach(index => {
			accumulator =`
			${accumulator}
			<p>${accumulator}</p>
			`
		})
			targetElement.innerHTML = accumulator
		})
}