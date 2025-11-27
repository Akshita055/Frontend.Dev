const logEl = document.getElementById('log')

function append(m) {
 	const d = document.createElement('div')
 	d.textContent = m
 	logEl.appendChild(d)
}

function randomDelay() {
 	return 1000 + Math.floor(Math.random() * 1000)
}

function maybeFail() {
 	return Math.random() < 0.2
}

function boilWater() {
 	return new Promise((res, rej) =>
 		setTimeout(() => {
 			if (maybeFail()) {
 				rej('Boiling failed')
 			} else {
 				append('Water boiled')
 				res('boiled')
 			}
 		}, randomDelay())
 	)
}

function brewCoffee() {
 	return new Promise((res, rej) =>
 		setTimeout(() => {
 			if (maybeFail()) {
 				rej('Brewing failed')
 			} else {
 				append('Coffee brewed')
 				res('brewed')
 			}
 		}, randomDelay())
 	)
}

function pourCoffee() {
 	return new Promise((res, rej) =>
 		setTimeout(() => {
 			if (maybeFail()) {
 				rej('Pouring failed')
 			} else {
 				append('Coffee poured into cup')
 				res('poured')
 			}
 		}, randomDelay())
 	)
}

append('Starting coffee process')

boilWater()
 	.then(() => brewCoffee())
 	.then(() => pourCoffee())
 	.then(() => append('Coffee ready for the team!'))
 	.catch(e => append('Failure: ' + e))
