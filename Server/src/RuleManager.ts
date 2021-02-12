import { app } from 'electron';

export class RuleManager {
    private static instance: RuleManager;

    public static getInstance (): RuleManager {
        if (!RuleManager.instance) {
            RuleManager.instance = new RuleManager();
        }
        return RuleManager.instance;
    }

    public parseXML():void{
        console.log(app.getPath('userData'));
    }
}