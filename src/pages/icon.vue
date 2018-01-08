<template>
  <div class="ui-con-box">
    <h2>Icon 图标</h2>
    <h5>提供了一套常用的图标集合。</h5>
    <h3>使用方法</h3>
    <h5>直接通过设置类名为icon-iconname 来使用即可</h5>
    <h3>如何使用</h3>
    <h5>使用 i 标签声明组件</h5>
    <pre class="ui-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span></code></pre>
    <h3 class="mt40">前台图标</h3>
    <ul class="ui-icon-list mt30">
      <li class="ui-icon-li" v-clipboard:copy="'qb-icon-download'" v-clipboard:success="copyClick">
        <i class="ui-icon-unite qb-icon-download"></i>
        <span class="ui-icon-name" ref="param1">qb-icon-download</span>
      </li>
      <li class="ui-icon-li" v-clipboard:copy="'qb-icon-delete'">
        <i class="ui-icon-unite qb-icon-delete"></i>
        <span class="ui-icon-name">qb-icon-delete</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-account"></i>
        <span class="ui-icon-name">qb-icon-account</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-home"></i>
        <span class="ui-icon-name">qb-icon-home</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-instead"></i>
        <span class="ui-icon-name">qb-icon-instead</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-payment"></i>
        <span class="ui-icon-name">qb-icon-payment</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-other"></i>
        <span class="ui-icon-name">qb-icon-other</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-other1"></i>
        <span class="ui-icon-name">qb-icon-other1</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-credit"></i>
        <span class="ui-icon-name">qb-icon-other1</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-username"></i>
        <span class="ui-icon-name">qb-icon-username</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-quit"></i>
        <span class="ui-icon-name">qb-icon-quit</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-password"></i>
        <span class="ui-icon-name">qb-icon-password</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-choose"></i>
        <span class="ui-icon-name">qb-icon-choose</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-close"></i>
        <span class="ui-icon-name">qb-icon-close</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-calendar"></i>
        <span class="ui-icon-name">qb-icon-calendar</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-bell"></i>
        <span class="ui-icon-name">qb-icon-bell</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-back"></i>
        <span class="ui-icon-name">qb-icon-back</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-add"></i>
        <span class="ui-icon-name">qb-icon-add</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-delete1"></i>
        <span class="ui-icon-name">qb-icon-delete1</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-delete2"></i>
        <span class="ui-icon-name">qb-icon-delete2</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-delete3"></i>
        <span class="ui-icon-name">qb-icon-delete3</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-details"></i>
        <span class="ui-icon-name">qb-icon-details</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-search"></i>
        <span class="ui-icon-name">qb-icon-search</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-open"></i>
        <span class="ui-icon-name">qb-icon-open</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-code"></i>
        <span class="ui-icon-name">qb-icon-code</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-eye-close"></i>
        <span class="ui-icon-name">qb-icon-eye-close</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-OK"></i>
        <span class="ui-icon-name">qb-icon-OK</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-report"></i>
        <span class="ui-icon-name">qb-icon-report</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-report1"></i>
        <span class="ui-icon-name">qb-icon-report1</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-user"></i>
        <span class="ui-icon-name">qb-icon-user</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-icon-yellow"></i>
        <span class="ui-icon-name">qb-icon-icon-yellow</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-icon-blue"></i>
        <span class="ui-icon-name">qb-icon-icon-blue</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-home-thin"></i>
        <span class="ui-icon-name">qb-icon-home-thin</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-choose1"></i>
        <span class="ui-icon-name">qb-icon-choose1</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-xiugaimima"></i>
        <span class="ui-icon-name">qb-icon-xiugaimima</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-jibenxinxi"></i>
        <span class="ui-icon-name">qb-icon-jibenxinxi</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-menu-message-thin"></i>
        <span class="ui-icon-name">qb-icon-menu-message-thin</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-menu-lock-thin"></i>
        <span class="ui-icon-name">qb-icon-menu-lock-thin</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-rob-icon-plus"></i>
        <span class="ui-icon-name">qb-icon-rob-icon-plus</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-open1"></i>
        <span class="ui-icon-name">qb-icon-open1</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-angle-down"></i>
        <span class="ui-icon-name">qb-icon-angle-down</span>
      </li>
       <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-icon-menu"></i>
        <span class="ui-icon-name">qb-icon-icon-menu</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-angle-up"></i>
        <span class="ui-icon-name">qb-icon-angle-up</span>
      </li>
     
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-icon-left"></i>
        <span class="ui-icon-name">qb-icon-icon-left</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-icon-right"></i>
        <span class="ui-icon-name">qb-icon-icon-right</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-icon-right1"></i>
        <span class="ui-icon-name">qb-icon-icon-right1</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-icon-left1"></i>
        <span class="ui-icon-name">qb-icon-icon-left1</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-enterprise-financing"></i>
        <span class="ui-icon-name">qb-icon-enterprise-financing</span>
      </li>
    </ul>

 <h3 class="mt40">后台图标</h3>
    <ul class="ui-icon-list mt30">
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-download"></i>
        <span class="ui-icon-name">qb-icon-download</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-delete"></i>
        <span class="ui-icon-name">qb-icon-delete</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-username"></i>
        <span class="ui-icon-name">qb-icon-username</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-quit"></i>
        <span class="ui-icon-name">qb-icon-quit</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-password"></i>
        <span class="ui-icon-name">qb-icon-password</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-choose"></i>
        <span class="ui-icon-name">qb-icon-choose</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-choose"></i>
        <span class="ui-icon-name">qb-icon-choose</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-calendar"></i>
        <span class="ui-icon-name">qb-icon-calendar</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-bell"></i>
        <span class="ui-icon-name">qb-icon-bell</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-back"></i>
        <span class="ui-icon-name">qb-icon-back</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-add"></i>
        <span class="ui-icon-name">qb-icon-add</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-delete1"></i>
        <span class="ui-icon-name">qb-icon-delete1</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-delete2"></i>
        <span class="ui-icon-name">qb-icon-delete2</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-details"></i>
        <span class="ui-icon-name">qb-icon-details</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-search"></i>
        <span class="ui-icon-name">qb-icon-search</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-open"></i>
        <span class="ui-icon-name">qb-icon-open</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-code"></i>
        <span class="ui-icon-name">qb-icon-code</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-eye-close"></i>
        <span class="ui-icon-name">qb-icon-eye-close</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-OK"></i>
        <span class="ui-icon-name">qb-icon-OK</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-report"></i>
        <span class="ui-icon-name">qb-icon-report</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-report1"></i>
        <span class="ui-icon-name">qb-icon-report1</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-user"></i>
        <span class="ui-icon-name">qb-icon-user</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-home-thick"></i>
        <span class="ui-icon-name">qb-icon-home-thick</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-shezhi"></i>
        <span class="ui-icon-name">qb-icon-shezhi</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-paper-thickg"></i>
        <span class="ui-icon-name">qb-icon-paper-thickg</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-wallet-thick"></i>
        <span class="ui-icon-name">qb-icon-wallet-thick</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-money-thick"></i>
        <span class="ui-icon-name">qb-icon-money-thick</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-card-thick"></i>
        <span class="ui-icon-name">qb-icon-card-thick</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-counter-thick"></i>
        <span class="ui-icon-name">qb-icon-counter-thick</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-money-hand"></i>
        <span class="ui-icon-name">qb-icon-money-hand</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-person-thick"></i>
        <span class="ui-icon-name">qb-icon-person-thick</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-business-thick"></i>
        <span class="ui-icon-name">qb-icon-business-thick</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-choose1"></i>
        <span class="ui-icon-name">qb-icon-choose1</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-rob-icon-plus"></i>
        <span class="ui-icon-name">qb-icon-rob-icon-plus</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-open1"></i>
        <span class="ui-icon-name">qb-icon-open1</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-angle-down"></i>
        <span class="ui-icon-name">qb-icon-angle-down</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-angle-up"></i>
        <span class="ui-icon-name">qb-icon-angle-up</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-icon-left"></i>
        <span class="ui-icon-name">qb-icon-icon-left</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-icon-right"></i>
        <span class="ui-icon-name">qb-icon-icon-right</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-icon-right1"></i>
        <span class="ui-icon-name">qb-icon-icon-right1</span>
      </li>
      <li class="ui-icon-li">
        <i class="ui-icon-unite qb-icon-icon-left1"></i>
        <span class="ui-icon-name">qb-icon-icon-left1</span>
      </li>
    </ul>

  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      message: '111'
    }
  },
  methods: {
    copyClick: function () {
      alert('Copy')
    }
  }
}
</script>
