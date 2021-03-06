'use strict';

const {app, BrowserWindow} = require('electron');
const {resolve} = require('path');
const constants = require('./constants');

module.exports = [
  {
    label:   'Application',
    submenu: [
      {
        label: constants.TITLE,
        click: () => {
          new BrowserWindow({
            width:       285,
            height:      230,
            center:      true,
            resizable:   false,
            minimizable: false,
            maximizable: false,
            show:        true,
            title:       ''
          }).loadURL('file://' + resolve(__dirname, '..', 'about.html'));
        }
      },
      {
        type: 'separator'
      },
      {
        label:       'Quit Microsoft Teams',
        accelerator: 'CmdOrCtrl+Q',
        click:       () => {
          app.quit();
        }
      }
    ]
  },
  {
    label:   'Edit',
    submenu: [
      {
        label:       'Undo',
        accelerator: 'CmdOrCtrl+Z',
        selector:    'undo:',
        role:        'undo'
      },
      {
        label:       'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',
        selector:    'redo:',
        role:        'redo'
      },
      {
        type: 'separator'
      },
      {
        label:       'Cut',
        accelerator: 'CmdOrCtrl+X',
        selector:    'cut:',
        role:        'cut'
      },
      {
        label:       'Copy',
        accelerator: 'CmdOrCtrl+C',
        selector:    'copy:',
        role:        'copy'
      },
      {
        label:       'Paste',
        accelerator: 'CmdOrCtrl+V',
        selector:    'paste:',
        role:        'paste'
      },
      {
        label:       'Select All',
        accelerator: 'CmdOrCtrl+A',
        selector:    'selectAll:',
        role:        'selectAll'
      }
    ]
  },
  {
    label:   'View',
    submenu: [
      {
        label:       'Reload',
        accelerator: 'CmdOrCtrl+R',
        click:       (item, focusedWindow) => {
          if (focusedWindow) {
            focusedWindow.reload();
          }
        }
      },
      {
        label:       'Toggle Developer Tools',
        accelerator: (() => {
          if (process.platform === 'darwin') {
            return 'Alt+Command+I';
          }

          return 'Ctrl+Shift+I';
        })(),
        click:       (item, focusedWindow) => {
          if (focusedWindow) {
            focusedWindow.toggleDevTools();
          }
        }
      }
    ]
  }
];
