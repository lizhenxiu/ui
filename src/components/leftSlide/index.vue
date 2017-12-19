<template>
    <div class="ui-left-slife">
      <div class="ui-scrollbar">
           <h3>组件</h3>
           <ul>
            <li class="ui-nav-item">
                <a class="">
                  <span class="title">Basic</span>
                    <span class="ui-two-level"><router-link to="/components/comPage/a" >Color 色彩</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/b">Typograpy 字体</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/c">Icon 图标</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/d">Button 按钮</router-link></span>
                </a>
            </li>
          
             <li class="ui-nav-item">
                <a class="">
                  <span class="title">From</span>
                    <span class="ui-two-level"><router-link to="/components/comPage/a1">Radio 单选框</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/b1">Input 输入框</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/c1">Slect 选择器</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/d1">Cascader 联级选择</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/d1">Switch 开关</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/d1">Slider 滑块</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/d1">DataTimePicker 时间控件</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/d1">Upload 上传</router-link></span>
                </a>
            </li>
            <li class="ui-nav-item">
                <a class="">
                  <span class="title">Notice</span>
                    <span class="ui-two-level"><router-link to="/components/comPage/a2">Alert 警告</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/b2">Loading 加载</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/c2">Message 消息提示</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/d2">Notificatiin 通知</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/d2">MessageBox 弹层</router-link></span>
                </a>
            </li>
            <li class="ui-nav-item">
                <a class="">
                  <span class="title">Basic</span>
                    <span class="ui-two-level"><router-link to="/components/comPage/a3">Color 色彩</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/b3">Typograpy 字体</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/c3">Icon 图标</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/d3">Button 按钮</router-link></span>
                </a>
            </li>
        </ul>
    </div>
    </div>
</template>
<script type="text/javascript">
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss">
.ui-sidebar-menu{
  h3{
    font-size: 16px;
    font-weight: normal;
    color: #000;
    margin-bottom: 20px;
  }
}
.ui-left-slife{
  width: 250px;
    margin-top: 40px;
    border-right: 1px solid #eaeaea;
    position: absolute;
    top: 0;
    bottom: 0;
    -webkit-transition: padding-top .3s;
    transition: padding-top .3s;
}
.ui-nav-item{
  span{
   display: block;
    height: 40px;
    color: #444;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
  }

  .title{
    color: #9d9d9d;
  }
  .ui-two-level{
    margin-left: 15px;
  }
}
.ui-container{
  position: relative;
  min-height: 700px;
}
.ui-scrollbar{
    overflow: scroll;
    height: 100%;
}



.ui-contain-right{
  padding-left: 290px;
    padding-bottom: 100px;
    box-sizing: border-box;
    margin-top: 40px;
}
</style>
