<template>
  <div class="q-pa-md">
    <q-file
      @input="inputSelected"
      label="Pick files"
      filled
      multiple
      style="max-width: 300px"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import * as xml from 'xml-js'
import * as XmlParser from '../../../Shared/XmlParser/XmlParser'

@Component
export default class Uploader extends Vue {
  constructor() {
    console.log('this is basically the function')
    super()
  }

  inputSelected (e: File[]) {
    e.forEach((el: File) => {
      XmlParser.XmlParser.parseFile(el)
    })
  }
}
</script>
