const out = document.getElementById('out')

function add(m) {
 	const d = document.createElement('div')
 	d.textContent = m
 	out.appendChild(d)
}

add('Start')

setTimeout(() => add('setTimeout callback (macrotask)'), 0)

Promise.resolve().then(() => add('Promise.then callback (microtask)'))

add('Synchronous log')

add('End')
