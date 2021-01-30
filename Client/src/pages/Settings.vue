<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card">
      <q-card-section>
        <Uploader />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import Uploader from '../components/Uploader.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { Uploader }
})
export default class MainLayout extends Vue {
}
</script>
