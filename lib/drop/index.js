'use strict';

const ipc = require('ipc');

module.exports = function () {
	function handleDrop(e) {
		e.preventDefault();
		ipc.emit('drop-files', e.dataTransfer.files);
		return false;
	}

	function killEvent(e) {
		e.stopPropagation();
		e.preventDefault();
		return false;
	}

	document.addEventListener('dragenter', killEvent, false);
	document.addEventListener('dragover', killEvent, false);
	document.addEventListener('drop', handleDrop, false);
};
