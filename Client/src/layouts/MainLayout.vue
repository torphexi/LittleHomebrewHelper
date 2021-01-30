<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Little Homebrew Helper
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list>
          <q-item-label class="text-grey-8">
          </q-item-label>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-scroll-area>
      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-card
            class="my-card"
            flat
            bordered
            style="height: 120px"
          >
            <q-item>
              <q-item-section avatar>
                <q-btn
                  round
                  to="/"
                >
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                  </q-avatar>
                </q-btn>
              </q-item-section>

              <q-item-section>
                <q-item-label style="color: #282828; font-weight:bold; font-size:20px;">Drovuum</q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-card-section horizontal>
              <q-card-section style="color: #282828; font-weight:bold; font-size:20px;">
                1
              </q-card-section>

              <q-separator vertical />

              <q-card-section style="color: #282828; font-weight:bold; font-size:20spx;">
                Loxadon Cleric
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from '../components/EssentialLink.vue'

const linksData = [
  {
    title: 'Overview',
    caption: 'Character Overview',
    icon: 'school',
    link: '/overview'
  },
  {
    title: 'Build',
    caption: 'Character Settings',
    icon: 'code',
    link: '/build'
  },
  {
    title: 'Inventory',
    caption: 'Loot',
    icon: 'chat',
    link: '/inventory'
  },
  {
    title: 'Spells',
    caption: 'magic n shit',
    icon: 'record_voice_over',
    link: '/spells'
  },
  {
    title: 'Misc',
    caption: 'other',
    icon: 'rss_feed',
    link: '/misc'
  },
  {
    title: 'Settings',
    caption: 'sources',
    icon: 'public',
    link: '/settings'
  }
]

import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { EssentialLink }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false
  essentialLinks = linksData
}
</script>
