const out10 = document.getElementById('out')

function o10(m) {
 	const d = document.createElement('div')
 	d.textContent = m
 	out10.appendChild(d)
}

function randDelay() {
 	return 1000 + Math.floor(Math.random() * 1000)
}

function maybeFail() {
 	return Math.random() < 0.2
}

function takeOrder() {
 	return new Promise((res, rej) =>
 		setTimeout(() => {
 			if (maybeFail()) {
 				rej('takeOrder failed')
 			} else {
 				res('Order taken')
 			}
 		}, randDelay())
 	)
}

function prepare() {
 	return new Promise((res, rej) =>
 		setTimeout(() => {
 			if (maybeFail()) {
 				rej('prepare failed')
 			} else {
 				res('Food prepared')
 			}
 		}, randDelay())
 	)
}

function pack() {
 	return new Promise((res, rej) =>
 		setTimeout(() => {
 			if (maybeFail()) {
 				rej('pack failed')
 			} else {
 				res('Package ready')
 			}
 		}, randDelay())
 	)
}

function dispatch() {
 	return new Promise((res, rej) =>
 		setTimeout(() => {
 			if (maybeFail()) {
 				rej('dispatch failed')
 			} else {
 				res('Out for delivery')
 			}
 		}, randDelay())
 	)
}

function deliver() {
 	return new Promise((res, rej) =>
 		setTimeout(() => {
 			if (maybeFail()) {
 				rej('deliver failed')
 			} else {
 				res('Delivery completed')
 			}
 		}, randDelay())
 	)
}

async function runPipeline() {
 	try {
 		o10('Start Pipeline')
 		o10('Step 1: ' + await takeOrder())
 		o10('Step 2: ' + await prepare())
 		o10('Step 3: ' + await pack())
 		o10('Step 4: ' + await dispatch())
 		o10(await deliver())
 		o10('Delivery completed!')
 	} catch (e) {
 		o10('Pipeline failed!')
 	}
}

runPipeline()
