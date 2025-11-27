const out8 = document.getElementById('out')

function o8(m) {
 	const d = document.createElement('div')
 	d.textContent = m
 	out8.appendChild(d)
}

function submitOrder() {
 	return new Promise((res, rej) =>
 		setTimeout(() => {
 			if (Math.random() < 0.5) {
 				res('Order accepted')
 			} else {
 				rej('Order failed')
 			}
 		}, 1000)
 	)
}

async function processOrder() {
 	for (let i = 1; i <= 3; i++) {
 		try {
 			await submitOrder()
 			o8('Attempt ' + i + ': Success')
 			return
 		} catch (err) {
 			o8('Attempt ' + i + ': Failed')
 		}
 	}
 	throw new Error('Order could not be processed')
}

(async function () {
 	try {
 		await processOrder()
 		o8('Order processed')
 	} catch (e) {
 		o8('Order could not be processed')
 	}
})()
