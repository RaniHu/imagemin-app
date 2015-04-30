'use strict';

const ipc = require('ipc');
require('./lib/drop')();

ipc.on('drop-files', function (files) {
	console.log(files);
});
