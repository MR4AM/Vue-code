<template>
    <div class="cube">
        <cube-button @click="showDatePicker">Date Picker</cube-button>
    </div>
</template>
<style lang="scss" scoped>
    @import './cube.scss';
</style>
<script>
//滴滴团队基于vue应用的ui框架https://didi.github.io/cube-ui/#/zh-CN/docs/introduction
import Vue from 'vue';
export default {
  methods: {
    showDatePicker() {
      if (!this.datePicker) {
        this.datePicker = this.$createDatePicker({
          title: 'Date Picker',
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }

      this.datePicker.show()
    },
    selectHandle(date, selectedVal, selectedText) {
      this.$createDialog({
        type: 'warn',
        content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
        icon: 'cubeic-alert'
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: 'correct',
        txt: 'Picker canceled',
        time: 1000
      }).show()
    }
  }
}
</script>


