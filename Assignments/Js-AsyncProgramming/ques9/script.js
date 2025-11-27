const out9 = document.getElementById('out')

function o9(m) {
 	const d = document.createElement('div')
 	d.textContent = m
 	out9.appendChild(d)
}

console.log('Script start')
o9('Script start')

setTimeout(() => {
 	console.log('Timeout callback')
 	o9('Timeout callback')
}, 0)

Promise.resolve().then(() => {
 	console.log('Promise callback')
 	o9('Promise callback')
})

console.log('Script end')
o9('Script end')
