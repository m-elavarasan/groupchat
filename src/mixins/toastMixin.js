export default{
  makeToast(data) {
    this.$bvToast.toast(`${data}`, {
    title: ' Toast',
    autoHideDelay: 5000,
    // appendToast: append
  })
}
}