<template>
  <div>
    <p v-for="item in items | reverser" track-by="id" > {{ item.price}}</p>
    <li v-for="item in items"></li>
</div>
</template>

<script>
  export default {
    data() {
      return {
        items:[
          {
            id:1,
            name:'A',
            price:100
          },
          {
            id:2,
            name:'B',
            price:200
          },
          {
            id:3,
            name:'C',
            price:300
          }
        ]
      }
    },
  filters: {
  prefixrs: function(value) {
    if (!value) return ''
    value = value.toString()
    return "Rs."+value
  },
  reverser: function(array) {
    return array.slice().reverse();
  }
}
  }
</script>

<style lang="scss" scoped>

</style>