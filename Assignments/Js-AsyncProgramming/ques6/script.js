const status = document.getElementById('status')
const grid = document.getElementById('grid')

function s(m) {
 	status.textContent = m
}

function makeCard(p) {
 	const c = document.createElement('div')
 	c.className = 'card'
 	const t = document.createElement('div')
 	t.textContent = p.title
 	const pr = document.createElement('div')
 	pr.textContent = '$' + p.price
 	const img = document.createElement('img')
 	img.src = p.image
 	c.appendChild(img)
 	c.appendChild(t)
 	c.appendChild(pr)
 	return c
}

(async function () {
 	try {
 		s('Loading products...')
 		const res = await fetch('https://fakestoreapi.com/products')
 		if (!res.ok) throw new Error('Network')
 		const products = await res.json()
 		products.forEach(p => grid.appendChild(makeCard(p)))
 		s('Loaded ' + products.length + ' products')
 	} catch (e) {
 		s('Failed to load products. Please try again.')
 	}
})()
