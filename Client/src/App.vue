<template>
    <!-- App -->
    <f7-app :params="f7params">
        <f7-statusbar></f7-statusbar>
        <f7-view url="/" :main="true" class="ios-edges"></f7-view>
    </f7-app>
</template>
<script lang='ts'>
// Import Routes...
import { Component, Vue, Watch, Mixins } from 'vue-property-decorator';
import routes from './routes';

let theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

export default class App extends Vue {
  public f7params = {
    id: 'com.liteputer.ex1',
    theme: theme,
    // theme: 'md', // always md theme,
    name: '', // name預設做為alert的標題，請保持空白
    routes,
    touch: {
      materialRipple: true
    },
  };
}
</script>