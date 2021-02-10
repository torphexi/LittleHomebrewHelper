import * as xml from '../../Client/node_modules/xml-js'
import * as cl from './Types/Class'
import * as idb from '../IDB/idb_service'
import { IDB_service } from '../IDB/idb_service'
import {AdmZip } from '../../Client/node_modules/adm-zip'
import { Buffer } from 'node'

export class XmlParser {

    parseFile (file: Buffer) {
        var zip = new AdmZip(file)
        console.log(zip)
        // const read = new FileReader()
        // read.readAsBinaryString(file)
        // read.onloadend = function () {
        //     let content: string = read.result.toString()
        //     //removing BOM in case it exists in the file. it shouldnt be there but here we are..
        //     content = content.replace('ï»¿', '')
        //     let obj: object = JSON.parse(xml.xml2json(content, { compact: true, spaces: 4, ignoreComment: true }))
        //     let cl: cl.Class = <cl.Class>obj

        //     if (cl.index) {
        //         // This is an index file
        //         for (let file of cl.index.files.file) {
        //             console.log(file)
        //         }
        //     } else {
        //         // This is a content file
        //         console.log('null')
        //     }
        // }


        // let idb: idb.IDB_service = new IDB_service()
        // idb.initJsStore()
        // idb.readData()
    }

    private HandleIndexFile (file: cl.Class) {

    }

    private HandleContentFile (file: cl.Class) {

    }
}