import * as fs from 'fs';
import * as path from "path";
import { ipcMain } from 'electron';
import { WindowContainer } from './WindowContainer';


export class WindowManager {
    private static instance: WindowManager;

    private constructor() {
        ipcMain.on('pageChange', (event, data) => {
            this.setContent(data);
        });
    }

    public static getInstance (): WindowManager {
        if (!WindowManager.instance) {
            WindowManager.instance = new WindowManager();
        }
        return WindowManager.instance;
    }

    public setContent (page: string): void {
        WindowContainer.getInstance().Window.webContents.send('update', this.getPath(page));
    }

    private getPath (name: string): string {
        return path.join(__dirname, '../src/' + name + '/' + name + '.html');
    }
}