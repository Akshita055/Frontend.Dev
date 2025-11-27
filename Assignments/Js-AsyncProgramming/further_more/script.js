const servers = document.getElementById('servers')
const pipeline = document.getElementById('pipeline')

function append(el, m) {
 	const d = document.createElement('div')
 	d.textContent = m
 	el.appendChild(d)
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
 				res('Server A response')
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
 				res('Server B response')
 			}
 		}, 3000)
 	)
}

append(servers, 'Starting servers')

const a = new Promise((res, rej) =>
 	setTimeout(() => {
 		if (maybeFail()) {
 			rej('Server A failed')
 		} else {
 			res('Server A response')
 		}
 	}, 2000)
)

const b = new Promise((res, rej) =>
 	setTimeout(() => {
 		if (maybeFail()) {
 			rej('Server B failed')
 		} else {
 			res('Server B response')
 		}
 	}, 3000)
)

Promise.all([a, b])
 	.then(() => append(servers, 'Deployment completed for all servers'))
 	.catch(e => append(servers, 'All error: ' + e))

Promise.race([a, b])
 	.then(x => append(servers, 'Fastest response: ' + x))
 	.catch(e => append(servers, 'Race error: ' + e))

function stage(name, cb) {
 	setTimeout(() => cb(name + ' done'), 1000)
}

stage('design', function () {
 	stage('build', function () {
 		stage('test', function () {
 			stage('deploy', function () {
 				stage('celebrate', function () {
 					append(pipeline, 'Nested: Pipeline complete')
 				})
 			})
 		})
 	})
})

function stageP(name) {
 	return new Promise(res => setTimeout(() => res(name + ' done'), 1000))
}

(async function () {
 	await stageP('design')
 	await stageP('build')
 	await stageP('test')
 	await stageP('deploy')
 	await stageP('celebrate')
 	append(pipeline, 'Async/Await: Pipeline complete')
})()
