const out = document.getElementById('out')

function o(m) {
 	const d = document.createElement('div')
 	d.textContent = m
 	out.appendChild(d)
}

function maybeFail() {
 	return Math.random() < 0.2
}

function serverA() {
 	return new Promise((res, rej) =>
 		setTimeout(() => {
 			if (maybeFail()) {
 				rej('Server A failed')
 			} else {
 				res('Server A finished')
 			}
 		}, 2000)
 	)
}

function serverB() {
 	return new Promise((res, rej) =>
 		setTimeout(() => {
 			if (maybeFail()) {
 				rej('Server B failed')
 			} else {
 				res('Server B finished')
 			}
 		}, 3000)
 	)
}

o('Starting server requests')

const a = serverA()
const b = serverB()

Promise.all([a, b])
 	.then(() => o('Deployment completed for all servers'))
 	.catch(e => o('Deployment error: ' + e))

Promise.race([a, b])
 	.then(x => o('Fastest response: ' + x))
 	.catch(e => o('Race error: ' + e))
