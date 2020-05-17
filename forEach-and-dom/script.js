/**
 *function that changes the background color of a button once
**/
// function changeColor(){
// 	let elem = document.getElementById('target')
// elem.style.backgroundColor = "red"
// }
/**
 * changes background color between green and red
 */
// function changeColor(){
// 	let button = document.getElementById('target')
// 	if(button.style.backgroundColor === 'green') {
// 		button.style.backgroundColor ='red'
// 	} else {
// 		button.style.backgroundColor ='green'
// 	}
// }

/**
 * function that changes the color randomly
 */

function changeColor(){
	let button = document.getElementById('target')
	var red =Math.floor(Math.random() * 256)
	var green = Math.floor(Math.random() * 256)
	var blue = Math.floor(Math.random()* 256)
	var redGreenBlue = 'rgb('+ red +', '+ green+', '+ blue +')'
	button.style.backgroundColor = redGreenBlue
}
