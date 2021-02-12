import { BrowserWindow } from 'electron';

export class WindowContainer {
    private static instance: WindowContainer;
    public Window: BrowserWindow;

    public static getInstance (): WindowContainer {
        if (!WindowContainer.instance) {
            WindowContainer.instance = new WindowContainer();
        }
        return WindowContainer.instance;
    }
}