import * as xml from '../../Client/node_modules/xml-js'
import * as cl from './Types/Class'
export class XmlParser {

    static parseFile(file: File){
        console.log(file.name)
        const read = new FileReader()
        read.readAsBinaryString(file)
        read.onloadend = function () {
          let content: string = read.result.toString()
          //removing BOM in case it exists in the file. it shouldnt be there but here we are..
          content = content.replace('ï»¿','')
          console.log(content)
          let obj:object = JSON.parse( xml.xml2json(content, { compact: true, spaces: 4, ignoreComment: true }))
          let cl:cl.Class = <cl.Class>obj
          console.log(cl)
        }
    }
}