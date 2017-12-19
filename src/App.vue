<template>
  <div id="app">
    <mainHeader></mainHeader>
    <router-view></router-view>
    
  </div>
</template>

<script>
import mainHeader from './components/headerSection'
export default {
  name: 'app',
  components: {
    mainHeader
  }
}
</script>


<style lang="scss" type="text/scss" rel="stylesheet/scss">
  @import 'assets/css/main.css';
  @import 'assets/css/robotUI.css';
  @import 'assets/css/ui.css';
  


  body, html{
   background-color: #fff !important;
}
a{
  color: #393939;
}
    .body, html{
      background-color: #fff !important;
    }
</style>
