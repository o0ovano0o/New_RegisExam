<template>
<div>
</div>
</template>
<script>
export default {
  name:"Toasted",
   props: {
    msg: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      default: "default"
    }
  },
  data() {
    return {};
  },
  created: function () {
    this.$toasted.show(this.msg, {
            theme: "toasted-primary",
            position: "bottom-right",
            duration : 5000,
            type: this.status
          });
  },
}
</script>