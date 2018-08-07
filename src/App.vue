<template lang="pug">
  v-app
    Header
    v-content
      Content
    Footer
</template>

<script>
import Content from './components/Content'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export default {
  name: 'App',
  components: {
    Content,
    Header,
    Footer
  },
  data () {
    return {
      fixed: false
    }
  }
}
</script>
