<template lang="pug">
  v-container(fluid)
    v-slide-y-transition(mode="out-in")
      v-layout(column align-center)
        v-text-field(
          v-model="name"
          :error-messages="nameErrors"
          :counter="100"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        )
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
            label="いつやんねん"
            prepend-icon="event"
            readonly
          )
          v-date-picker(v-model="date" @input="$refs.menu.save(date)")
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

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
      name: '',
    }
  },

  mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(100) },
    },

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('名前長すぎやろ')
        !this.$v.name.required && errors.push('いや、誰に通知すんねん')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
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
