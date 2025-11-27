const out5 = document.getElementById('out')

function log5(m) {
 	const d = document.createElement('div')
 	d.textContent = m
 	out5.appendChild(d)
}

function stage(name, cb) {
 	setTimeout(() => cb(name + ' done'), 1000)
}

stage('design', function () {
 	stage('build', function () {
 		stage('test', function () {
 			stage('deploy', function () {
 				stage('celebrate', function () {
 					log5('Nested: Pipeline complete')
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
 	log5('Async/Await: Pipeline complete')
})()
