export default {
  install (Vue, options) {
    Vue.mixin({
      methods: {
        $_vuenotie (message,status) {
          this.$toasted.show(message, {
            theme: "toasted-primary",
            position: "bottom-right",
            duration : 5000,
            type: status
          });
        }
      }
    })
  }
}