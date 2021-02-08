import * as JsStore from '../../Client/node_modules/jsstore';
import {
    DATA_TYPE
} from '../../Client/node_modules/jsstore';

export class IDB_service {

    getDbSchema() {
        var tblProduct = {
        name: 'Product',
        columns: {
            // Here "Id" is name of column 
            id:{ primaryKey: true, autoIncrement: true },
            itemName:  { notNull: true, dataType: "string" },
            price:  { notNull: true, dataType: "number" },
            quantity : { notNull: true, dataType: "number" }
        }
        };
        var db = {
            name: "Serpent",
            tables: [tblProduct]
        }
        return db;
    }

    // executing jsstore inside a web worker
    private connection = new JsStore.Connection(new Worker('jsstore.worker.js'));

    async initJsStore() {
        var database = this.getDbSchema();
        const isDbCreated = await this.connection.initDb(database);
        if(isDbCreated===true){
            console.log("db created");
            // here you can prefill database with some data
        }
        else {
            console.log("db opened");
        }
    }

    async insertData(){
        var value = {
            itemName: 'Blue Jeans',
            price: 2000,
            quantity: 1000
        }
        var noOfDataInserted = await this.connection.insert({
            into: 'Product',
            values: [value]
        });
        if (noOfDataInserted > 0) {
            alert('successfully added');
        }
    }

    async readData(){
        var results = await this.connection.select({
            from: 'Product'
        });
        console.log(results)
        alert(results.length + 'record found');
    }
}
