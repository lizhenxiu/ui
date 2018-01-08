<template>
    <div class="rob-container ui-container">
    <projectLeft></projectLeft>
     <div class="ui-contain-right">  
      <section> 
     <router-view></router-view> 
      </section>
     </div>
  </div>
</template>

<script type="text/javascript">
import projectLeft from '../projectLeft/index'
export default{
  name: 'page',
  components: {
    projectLeft
  }
}
</script>
