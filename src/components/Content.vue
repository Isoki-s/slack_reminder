<template lang="pug">
v-container(fluid fill-height)
  v-layout(align-center justify-center)
    v-flex(xs12 sm8 md4)
      v-card(class="elevation-12")
        v-toolbar(dark color="primary" class="center")
          v-toolbar-title Slack Reminder
        v-card-text
          v-form
            //- SELECT[me,someone,@here]
            v-select(
              prepend-icon="people"
              :items="items"
              v-model="item"
              label="誰に?"
              required
            )
            v-text-field(
              v-if="item == 'someone'"
              prepend-icon="person"
              v-model="name"
              :error-messages="nameErrors"
              :counter="100"
              label="アカウント名は？ 例：taro"
              required
            )
            v-text-field(
              prepend-icon="question_answer"
              v-model="todo"
              label="なにを？ 例：レビューミーティング"
              required
            )
            //- SELECT[経過時間指定,時刻指定,日付指定,毎週の繰り返し設定,隔週の繰り返し設定]
            v-select(
              prepend-icon="watch_later"
              :items="whenlist"
              v-model="when"
              label="いつ"
              required
            )
            div#whenselect(v-if="when == '日付指定'")
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
            div#whenselect(v-if="when == '時刻指定'")
              //- Selectが時刻指定の時
              v-menu(
                ref="menu"
                :close-on-content-click="false"
                v-model="timer"
                :nudge-right="40"
                :return-value.sync="time"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
              )
                v-text-field(
                  slot="activator"
                  v-model="time"
                  label="時刻指定"
                  prepend-icon="access_time"
                  readonly
                )
                v-time-picker(v-if="timer" v-model="time" format="24hr" @change="$refs.menu.save(time)")
        v-card-actions
          //- 誰かに通知する時
          div(v-if="item == 'someone'")
            p#result1 /remind @{{ name }} "{{ todo }}" at {{ time }}
          //- それ以外の通知 me or @here
          div(v-else)
            p#result2 /remind {{ item }} "{{ todo }}" at {{ time }}
          v-spacer
          v-btn(class="btn" color="primary" data-clipboard-target="#result1") copy
          v-btn(class="btn" color="primary" data-clipboard-target="#result") copy
          v-btn(color="primary" @click="clear") clear
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      selectedDate: new Date(),
      drawer: null,
      date: null,
      menu: false,
      modal: false,
      name: '',
      todo: '',
      time: null,
      timer: false,
      item: '',
      when:'',
      items: [
        'me',
        'someone',
        '@here',
      ],
      whenlist: [
        '経過時間指定',
        '時刻指定',
        '日付指定',
        '毎週の繰り返し設定',
        '隔週の繰り返し設定',
      ],
    }
  },

  mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(100) },
      todo: { required },
    },

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('名前長すぎやろ')
        !this.$v.name.required && errors.push('いや、誰に通知すんねん')
        return errors
      },
      todoErrors () {
        const errors = []
        if (!this.$v.todo.$dirty) return errors
        !this.$v.todo.required && errors.push('なに、すんねん')
        return errors
      }
    },

    methods: {
      clear () {
        this.$v.$reset()
        this.name = ''
        this.todo = ''
        this.item = ''
        this.time = ''
        this.when = ''
      }
    }
}
</script>

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
