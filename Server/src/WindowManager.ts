import * as fs from 'fs';
import * as path from "path";
import { BrowserWindow, ipcMain } from 'electron';


export class WindowManager {
    private static instance: WindowManager;

    private constructor(){
        ipcMain.on('pageChange', (event , data) =>{
            this.setContent(this.getPath(data));
        });
    }
    public Window: BrowserWindow;

    public static getInstance (): WindowManager {
        if (!WindowManager.instance) {
            WindowManager.instance = new WindowManager();
        }
        return WindowManager.instance;
    }

    public setContent (htmlPath: string) {

        fs.readFile(path.join(__dirname, htmlPath), 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return
            }
            this.Window.webContents.send('update', data);
        });
    }

    private getPath(name: string):string{
        return '../src/'+name+'/'+name+'.html'
    }
}