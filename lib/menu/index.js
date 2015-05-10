'use strict';

const BrowserWindow = require('browser-window');
const Menu = require('menu');

module.exports = function () {
	return Menu.buildFromTemplate([{
		label: 'View',
		submenu: [{
			label: 'Reload',
			accelerator: 'Super+R',
			click: function () {
				BrowserWindow.getFocusedWindow().reloadIgnoringCache();
			}
		}, {
			label: 'Toggle DevTools',
			accelerator: process.platform === 'darwin' ? 'Super+Alt+I' : 'Super+Shift+I',
			click: function () {
				BrowserWindow.getFocusedWindow().toggleDevTools();
			}
		}]
	}]);
};
