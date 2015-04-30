'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');
const Menu = require('menu');
const path = require('path');
const menu = require('./lib/menu');

require('crash-reporter').start();
let mainWindow = null;

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', function () {
	Menu.setApplicationMenu(menu());

	mainWindow = new BrowserWindow({
		width: 600,
		height: 400,
		resizable: false,
		preload: path.join(__dirname, 'browser.js')
	});

	mainWindow.loadUrl(`file://${__dirname}/index.html`);

	mainWindow.on('closed', function () {
		mainWindow = null;
	});
});
