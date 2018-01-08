<template>
    <div class="rob-container ui-container">
    <leftslide></leftslide>
     <div class="ui-contain-right">  
      <section> 
     <router-view></router-view> 
      </section>
     </div>
  </div>
</template>

<script type="text/javascript">
import contentPage from '../contentPage/index'
import leftslide from '../leftslide/index'
export default{
  name: 'page',
  components: {
    contentPage,
    leftslide
  }
}
</script>
