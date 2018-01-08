<template>
    <div class="ui-left-slife">
      <div class="ui-scrollbar">
           <h3>组件</h3>
           <ul>
            <li class="ui-nav-item">
                <a class="">
                  <span class="title">Basic</span>
                    <span class="ui-two-level"><router-link to="/components/comPage/a" >Message Box</router-link></span>
                    <!-- <span class="ui-two-level"><router-link to="/components/comPage/font">Typograpy 字体</router-link></span> -->
                    <span class="ui-two-level"><router-link to="/components/comPage/icon">Icon 图标</router-link></span>
                    <!-- <span class="ui-two-level"><router-link to="/components/comPage/d">Button 按钮</router-link></span> -->
                </a>
            </li>
          
             <li class="ui-nav-item">
                <a class="">
                  <span class="title">From</span>
                    <span class="ui-two-level"><router-link to="/components/comPage/radio">Radio 单选框</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/checkbox">Checkbox 多选框</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/select">Slect 选择器</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/input">Input 输入框</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/switch">Switch 开关</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/upload">Upload 上传</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/datatimepicker">DataTimePicker 时间控件</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/transfer">Transfer 穿梭框</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/table">Table 表格</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/form">Form 表单</router-link></span>
                    <span class="ui-two-level"><router-link to="/components/comPage/sprites">Sprites 雪碧图</router-link></span>
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
