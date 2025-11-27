const out7 = document.getElementById('out')

function o7(m) {
 	const d = document.createElement('div')
 	d.textContent = m
 	out7.appendChild(d)
}

function maybeReject() {
 	return Math.random() < 0.3
}

function loadProfile() {
 	return new Promise((res, rej) =>
 		setTimeout(() => {
 			if (maybeReject()) {
 				rej('profile failed')
 			} else {
 				res('Profile Loaded')
 			}
 		}, 2000)
 	)
}

function loadPosts() {
 	return new Promise((res, rej) =>
 		setTimeout(() => {
 			if (maybeReject()) {
 				rej('posts failed')
 			} else {
 				res('Posts Loaded')
 			}
 		}, 1500)
 	)
}

function loadMessages() {
 	return new Promise((res, rej) =>
 		setTimeout(() => {
 			if (maybeReject()) {
 				rej('messages failed')
 			} else {
 				res('Messages Loaded')
 			}
 		}, 1000)
 	)
}

const start = Date.now()

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
 	.then(results => {
 		results.forEach((r, i) => {
 			o7((i + 1) + '. ' + (r.status === 'fulfilled' ? r.value : 'Failed: ' + r.reason))
 		})
 		o7('Total time: ' + (Date.now() - start) + ' ms')
 	})
