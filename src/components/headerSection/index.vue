<template>
<header class="header">
    <div class="rob-container">     
    <div class="ui-head-con">
      <a href=""><img class="ui-logo" src="../../assets/images/ui-logo.png" alt=""></a>
     <a href="" class="ui-logo-ft"><span>Robot UI</span></a>
    </div>
    <ul class="ui-head-menu">
      <li><router-link to="/components/indexPage">首页</router-link></li>
      <li><router-link to="/components/comPage">组件</router-link></li>
    </ul>
    </div>
  </header>
</template>
<script type="text/javascript">
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss">
  .ui-head-con{
      float: left;
      display: inline;
    }
    .ui-logo{
      vertical-align: middle;
      margin-bottom: 4px;
    }
    .ui-logo-ft{
      vertical-align: sub;
      position: relative;
      span{
        display: inline-block;
        vertical-align: middle;
        padding-top: 2px;
        margin-left: 10px;
      }
    }
  .header{
    height: 80px;
    background-color: #fff;
    color: #393939;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 1;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);
    position: relative;
}
.ui-head-menu{
      float: right;
      margin-right: 50px;
  li{
    display: inline-block;
    padding: 0px 40px; 
    font-size: 14px;
    color: #000000;
    &:hover{
      a{
        color: #006cff;
      }
    }
    }
}
.router-link-active{
       color: #006cff;
    }
</style>


