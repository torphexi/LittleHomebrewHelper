<template>
  <f7-page>
    <f7-navbar>
      <div class="title">Framework7-Vue-Typescript</div>
      <f7-nav-right>
        <f7-link
          class="searchbar-enable"
          data-searchbar=".searchbar-components"
          icon="fa fa-search"
        ></f7-link>
      </f7-nav-right>
      <f7-searchbar
        class="searchbar-components"
        search-container=".components-list"
        search-in="a"
        expandable
      ></f7-searchbar>
    </f7-navbar>
    <f7-block-title>Testing</f7-block-title>
    <f7-block inner>
      <p>Cordova - Framework7 - Vue - Typescript</p>
    </f7-block>
    <f7-block-title class="searchbar-found">Links</f7-block-title>
    <f7-list class="components-list searchbar-found">
      <f7-list-item
        link="/aboutPage/"
        title="About"
        panel-close
      >
        <f7-icon
          slot="media"
          ios="f7:info"
          md="material:info"
        ></f7-icon>
      </f7-list-item>
      <f7-list-item
        link="/formPage/"
        title="Form"
        panel-close
      >
        <f7-icon
          slot="media"
          material='home'
        ></f7-icon>
      </f7-list-item>
      <f7-list-item
        link="/dynamicRoutePage/blog/11/post/23/"
        title="Dynamic Route"
        panel-close
      >
      </f7-list-item>
      <f7-list-item
        link="/vuex/"
        title="Vuex"
        panel-close
      >
        <f7-icon material='battery_std'></f7-icon>
      </f7-list-item>
    </f7-list>
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>
    <f7-block-title class="searchbar-hide-on-search">Themes</f7-block-title>
    <f7-list class="searchbar-hide-on-search">
      <f7-list-item
        title="iOS Theme"
        external
        link="./index.html?theme=ios"
      ></f7-list-item>
      <f7-list-item
        title="Material (MD) Theme"
        external
        link="./index.html?theme=md"
      ></f7-list-item>
      <f7-list-item
        title="Color Themes"
        link="/colorThemePage/"
      ></f7-list-item>
      <f7-list-item
        title="Github"
        external
        link="https://github.com/kevinqqnj"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script lang='ts'>
// Vue
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class MainPage extends Vue {
  mounted () {
    console.log('mounted');
  }
}
</script>