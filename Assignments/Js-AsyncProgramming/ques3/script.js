const result = document.getElementById('result')

function show(m) {
 	const d = document.createElement('div')
 	d.textContent = m
 	result.appendChild(d)
}

function randomFailure() {
 	return Math.random() < 0.25
}

function getBugs() {
 	return new Promise((res, rej) =>
 		setTimeout(() => {
 			if (randomFailure()) {
 				rej('API error')
 			} else {
 				res(['UI glitch', 'API timeout', 'Login failure'])
 			}
 		}, 1000)
 	)
}

getBugs()
 	.then(bugs => {
 		const t = document.createElement('table')
 		const h = document.createElement('tr')
 		h.innerHTML = '<th>#</th><th>Bug</th>'
 		t.appendChild(h)
 		bugs.forEach((b, i) => {
 			const r = document.createElement('tr')
 			r.innerHTML = `<td>${i + 1}</td><td>${b}</td>`
 			t.appendChild(r)
 		})
 		result.appendChild(t)
 		console.table(bugs)
 	})
 	.catch(e => show('Failure: ' + e))
