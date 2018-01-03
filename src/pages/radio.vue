<template>
  <div class="ui-con-box">
    <h2>Radio单选框</h2>
    <h5>在一组备选项中进行单选</h5>
    <h3>基础用法</h3>
    <h5>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</h5>
   <div class="ui-message-show mb60">
      <div class=" ui-msg-pd40">
       <form action="#" class="ng-pristine ng-valid">
                      
                        <input class="rob-radio-with-gap" name="group2" type="radio" id="test4" checked="checked">
                        <label class="ui-msg-col mr30" for="test4">间隔</label>
                       
                        <input class="rob-radio-with-gap" name="group2"  type="radio" id="test5">
                        <label for="test5">间隔-选中</label>
                  
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
       <form action="#" class="ng-pristine ng-valid">
                      
                        <input class="rob-radio-with-gap" name="group2" checked="checked" disabled type="radio" id="test4">
                        <label class="ui-msg-col mr30" for="test4">间隔</label>
                       
                        <input class="rob-radio-with-gap" name="group3" disabled  type="radio" id="test4">
                        <label for="test4">间隔-选中</label>
                  
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
[type="radio"].rob-radio-with-gap:checked + label:after {
    border: 2px solid #006cff;
    background-color: #3175ff;}
    [type="radio"]:checked + label:after {
    border: 2px solid #3074ff;
    background-color: #35baff;}
    [type="radio"].rob-radio-with-gap:checked + label:before {
    border: 2px solid #2d80ff;
}
[type="radio"]:disabled:not(:checked) + label:before{
   background-color: transparent;
}
[type="radio"]:disabled:checked + label:after {
  background-color: #cecece;
  border-color: #cecece;
  border: 2px solid #cecece;
  cursor: not-allowed; }
  [type="radio"].rob-radio-with-gap:disabled:checked + label:before{
border: 2px solid #cecece;
  }

[type="radio"]:disabled + label {
  color: #cecece;
  cursor: not-allowed; }

[type="radio"]:disabled:not(:checked) + label:hover:before {
  border-color: #cecece; }
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
