<template  lang="pug">
  header
    v-navigation-drawer(
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    )
      v-list
        v-list-tile(
          value="true"
          v-for="(item, i) in items"
          :key="i"
        )
          v-list-tile-content
            v-list-tile-title(v-text="item.title")
    v-toolbar(
      app
      :clipped-left="clipped"
    )
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title(v-text="title")
      v-spacer
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      title: 'LOGO'
    }
  }
}
</script>
