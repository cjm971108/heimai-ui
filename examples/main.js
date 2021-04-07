import Vue from 'vue'
import App from './App.vue'
import HeimaUI from '../packages'
Vue.use(HeimaUI)
// import HmButton from './components/button.vue'
// import HmDialog from './components/dialog.vue'
// import HmInput from './components/input.vue'
// import HmSwitch from './components/switch.vue'
// import HmRadio from './components/radio.vue'
// import HmRadioGroup from './components/radio-group.vue'
// import HmCheckbox from './components/checkbox.vue'
// import HmCheckboxGroup from './components/checkbox-group.vue'
// import HmFormItem from './components/form-item.vue'
// import HmForm from './components/form.vue'








import './assets/fonts/font.scss'

Vue.config.productionTip = false
// Vue.component(HmButton.name, HmButton)
// Vue.component(HmDialog.name, HmDialog)
// Vue.component(HmInput.name, HmInput)
// Vue.component(HmSwitch.name, HmSwitch)
// Vue.component(HmRadio.name, HmRadio)
// Vue.component(HmRadioGroup.name, HmRadioGroup)
// Vue.component(HmCheckbox.name, HmCheckbox)
// Vue.component(HmCheckboxGroup.name, HmCheckboxGroup)
// Vue.component(HmFormItem.name, HmFormItem)
// Vue.component(HmForm.name, HmForm)








new Vue({
  render: h => h(App),
}).$mount('#app')
