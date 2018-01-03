<template>
  <div class="ui-con-box">
    <h2>Sprites 雪碧图</h2>
    <h5>提供了一套常用的Sprites 雪碧图。</h5>
    <h3>使用方法</h3>
    <h5>使用方法 bg_icon 加一个类名 如 class="bg_icon qb-icon-active" </h5>

    <ul class="ui-icon-list mt30">
      <li class="ui-icon-li" >
        <i class="bg_icon qb-icon-active"></i>
        <span class="ui-icon-name" >qb-icon-active</span>
      </li>
      <li class="ui-icon-li" >
        <i class="bg_icon qb-icon-checking"></i>
        <span class="ui-icon-name" >qb-icon-checking</span>
      </li>

      <li class="ui-icon-li" >
        <i class="bg_icon qb-icon-failure"></i>
        <span class="ui-icon-name" >qb-icon-failure</span>
      </li>

    </ul>
    <ul class="ui-icon-list mt30">
      <li class="ui-icon-li" >
        <i class="bg_icon qb-icon-verify"></i>
        <span class="ui-icon-name" >qb-icon-verify</span>
      </li>
      <li class="ui-icon-li" >
        <i class="bg_icon qb-icon-pay"></i>
        <span class="ui-icon-name" >qb-icon-pay</span>
      </li>

      <li class="ui-icon-li" >
        <i class="bg_icon qb-icon-loading"></i>
        <span class="ui-icon-name" >qb-icon-loading</span>
      </li>
    </ul>

    <ul class="ui-icon-list mt30">
      <li class="ui-icon-li" >
        <i class="bg_icon qb-icon-qrcode"></i>
        <span class="ui-icon-name" >qb-icon-qrcode</span>
      </li>
      <li class="ui-icon-li" >
        <i class="bg_icon qb-icon-qrquery"></i>
        <span class="ui-icon-name" >qb-icon-qrquery</span>
      </li>

      <li class="ui-icon-li" >
        <i class="bg_icon icon-two"></i>
        <span class="ui-icon-name" >icon-two</span>
      </li>
       <li class="ui-icon-li" >
        <i class="bg_icon icon-one"></i>
        <span class="ui-icon-name">icon-one</span>
      </li>
       <li class="ui-icon-li" >
        <i class="bg_icon icon-three"></i>
        <span class="ui-icon-name">icon-three</span>
      </li>
        <li class="ui-icon-li" >
        <i class="bg_icon icon-six"></i>
        <span class="ui-icon-name">icon-six</span>
      </li>
    </ul>

 <ul class="ui-icon-list mt30 ml30">
      <li class="ui-icon-li-tell qb-ico-tb-g" >
        <i class="bg_icon qb-icon-success"></i>
        <span class="qb-r-success-g--s_box" >qb-icon-success</span>
      </li>

       <li class="ui-icon-li-tell qb-ico-tb-g" >
        <i class="bg_icon qb-icon-fail "></i>
        <span class="qb-r-success-g--s_box" >qb-icon-fail</span>
      </li>
 </ul>
 <ul class="ui-icon-list mt30 ml30">
      <li class="ui-icon-li-tell qb-ico-tb-g" >
        <i class="bg_icon qb-nodate-g"></i>
        <span class="qb-r-success-g--s_box">qb-nodate-g</span>
      </li>
      <li class="ui-icon-li-tell qb-ico-tb-g" >
        <i class="bg_icon icon404"></i>
        <span class="qb-r-success-g--s_box">icon404</span>
      </li>
 </ul>
  </div>
</template>
<style lang="scss" scoped>
.ui-icon-list .ui-icon-li{
  margin-bottom: 30px;
  &:hover{
background: transparent;
  }
}
.ml30{
  margin-left: 30px;
}
.ui-icon-li-tell{
  margin-bottom: 30px;
}
</style>


</style>

<script type="text/javascript">
export default {
  data () {
    return {
      value: '212'
    }
  }
}
</script>
