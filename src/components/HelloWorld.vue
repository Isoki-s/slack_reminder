<template lang="pug">
  v-container(fluid)
    v-slide-y-transition(mode="out-in")
      v-layout(column align-center)
        v-menu(
          ref="menu"
          :close-on-content-click="false"
          v-model="menu"
          :nudge-right="40"
          :return-value.sync="date"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        )
          v-text-field(
            slot="activator"
            v-model="date"
            label="Picker without buttons"
            prepend-icon="event"
            readonly
          )
          v-date-picker(v-model="date" @input="$refs.menu.save(date)")
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      date: null,
      menu: false,
      modal: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983

</style>
