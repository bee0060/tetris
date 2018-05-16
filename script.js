'use strict';

(function() {
	/* Tetris control */

	function $d(id) {
		if (id.nodeType === 1) {
			return id
		}
		if (typeof id === 'string') {
			return document.getElementById(id)
		}
		return null
	}
	function $c (tagName) {
		return document.createElement(tagName);
	}
	function $f () {
		return document.createDocumentFragment();
	}

	const playground = $d('playground');

	const blockSize = 20;
	const playgroundWidth = 500;
	const playgroundHeight = 700;
	const hozBlockCount = playgroundWidth / blockSize;
	const verBlockCount = playgroundHeight / blockSize;

	function bootstrap() {
		console.log('$f', typeof $f)
		const frag = $f();

		for (let x = 0; x < hozBlockCount; x++) {
			for (let y = 0; y < verBlockCount; y++) {
				let span = $c('span');
				span.className = 'block';
				span.setAttribute('data-x', x);
				span.setAttribute('data-y', y);
				frag.appendChild(span);
			}
		}
		playground.style.display = 'none';
		playground.innerHTML = '';
		playground.appendChild(frag);
		playground.style.display = '';

	}

	bootstrap();
})()