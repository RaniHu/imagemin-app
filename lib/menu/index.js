'use strict';

const BrowserWindow = require('browser-window');
const Menu = require('menu');

module.exports = function () {
	const cmd = process.platform === 'darwin' ? 'Command' : 'Ctrl';

	return Menu.buildFromTemplate([{
		label: 'View',
		submenu: [{
			label: 'Reload',
			accelerator: cmd + '+R',
			click: function () {
				BrowserWindow.getFocusedWindow().reloadIgnoringCache();
			}
		}, {
			label: 'Toggle DevTools',
			accelerator: process.platform === 'darwin' ? cmd + '+Alt+I' : cmd + '+Shift+I',
			click: function () {
				BrowserWindow.getFocusedWindow().toggleDevTools();
			}
		}]
	}]);
};
