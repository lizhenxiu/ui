<template>
  <div class="ui-con-box">
    <h2>Checkbox 多选框</h2>
    <h5>一组备选项中进行多选</h5>
    <h3>基础用法</h3>
    <h5>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</h5>
   <div class="ui-message-show mb60">
      <div class=" ui-msg-pd40">
       <form >                     
            <input type="checkbox" class="rob-checkbox-filled-in" id="filled-in-box">
            <label for="filled-in-box">填充</label>    &nbsp;&nbsp;&nbsp;&nbsp;                
            <input type="checkbox" id="filled-in-box2" class="rob-checkbox-filled-in" checked="checked">
            <label for="filled-in-box2">填充-选中</label>
        </form>
      </div>
      <transition name="fade">
        <div class="ui-meta" v-if="isShow">
        <div class="ui-description">
            <code>
              radio
            </code>  
        </div>
        <div class="ui-highlight-code">
          <code>
                radio
          </code>
        </div>
      </div>
      </transition>
      <div @click="toggle()" class="ui-message-show-code">&#9660;{{btnText}}</div>
    </div>
   

   <h3>基础用法</h3>
    <h5>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</h5>
    <div class="ui-message-show mb60">
      <div class=" ui-msg-pd40">
       <form >                     
            <input type="checkbox" class="rob-checkbox-filled-in" id="filled-in-box4" disabled="disabled">
            <label for="filled-in-box4">填充</label>    &nbsp;&nbsp;&nbsp;&nbsp;                
            <input type="checkbox" id="filled-in-box3" class="rob-checkbox-filled-in" checked="checked" disabled="disabled">
            <label for="filled-in-box3">填充-选中</label>
        </form>
      </div>
      <transition name="fade">
        <div class="ui-meta" v-if="isShow">
        <div class="ui-description">
        
            <code>
              radio
            </code>
           
        </div>
        <div class="ui-highlight-code">
          <code>  
                radio
          </code>
        </div>
      </div>
      </transition>
      <div @click="toggle()" class="ui-message-show-code">&#9660;{{btnText}}</div>
    </div>

  </div>
</template>
<style lang="css" scoped>
[type="checkbox"].rob-checkbox-filled-in:checked + label:after{
	border: 2px solid #106fff;
}
[type="checkbox"].rob-checkbox-filled-in:checked + label:before{
	border-right: 2px solid #1f79ff;
    border-bottom: 2px solid #0f70ff;
}

[type="checkbox"]:disabled:not(:checked) + label:before{
   background-color: transparent;
}
[type="checkbox"]:disabled:checked + label:after {
  background-color: #ffffff;
    border-color: #cecece;
    border: 2px solid #dbe4ea;
    cursor: not-allowed; }
  [type="checkbox"].rob-radio-with-gap:disabled:checked + label:before{
border: 2px solid #cecece;
  }
/* 
[type="checkbox"]:disabled + label {
  color: #cecece;
  cursor: not-allowed; }

[type="checkbox"]:disabled:not(:checked) + label:hover:before {
  border-color: #cecece; } */
</style>

<script type="text/javascript">
export default {
  data () {
    return {
      btnText: '显示代码',
      isvisible: false,
      isvisible2: false,
      isShow: false
    }
  },
  methods: {
    toggle () {
      this.isShow = !this.isShow
      if (this.isShow) {
        this.btnText = '隐藏代码'
      } else {
        this.btnText = '显示代码'
      }
    },
    openBox1 () {
      this.isvisible = !this.isvisible
    },
    openBox2 () {
      this.isvisible2 = !this.isvisible2
    }
  }
}
</script>
