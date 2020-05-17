/**
 * This is my answer to the snap challenge. It brings all of the paragraphs together with no separation.
 */

// function fetchBacon () {
// 	const targetElement = document.getElementById('target')
// 	const fetchResult = fetch('https://baconipsum.com/api/?type=meat-and-filler')
// 	.then(bacon => {
// 		return bacon.json()
// 	})
// 	.then (processBacon => {
// 		document.getElementById('target').innerText = processBacon
// 	})
//
// }

function fetchBacon () {
	const targetElement = document.getElementById('target')
	fetch('https://baconipsum.com/api/?type=meat-and-filler')
		.then(reply => (reply.json()))
		.then(body => {
			let accumulator = ''
			// targetElement.innerHTML =  `<p>${body.join(' ')}</p>`
			body.forEach(index => {
			accumulator = `
			${accumulator}
			<p>${index}</p>
			`
			})

			targetElement.innerHTML = accumulator
		})
}