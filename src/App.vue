<template lang="pug">
  v-app
    Header
    v-content
      HelloWorld
    Footer
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export default {
  name: 'App',
  components: {
    HelloWorld,
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
