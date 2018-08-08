import Vue from 'vue'
// 必要なコンポーネントはここに追加
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VDatePicker,
  VTimePicker,
  VTextField,
  VSelect,
  VDialog,
  VMenu,
  VCard,
  VForm,
  VSnackbar,
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VDatePicker,
    VTimePicker,
    VTextField,
    VSelect,
    VDialog,
    VMenu,
    VCard,
    VForm,
    VSnackbar,
  },
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
})
