<template>
  <div class="ui-con-box">
    <h2>Select 选择器</h2>
    <h5>当选项过多时，使用下拉菜单展示并选择内容。</h5>
    <h3>基础用法</h3>
    <h5>适用广泛的基础单选</h5>

    <div class="ui-message-show mb60">
      <div class=" ui-msg-pd40">
        <form>
          <div class="rob-select rob-col-md-8">
            <div class="rob-select" @click="toggle()"  v-bind:class="{'open':!isopen,'open':isopen}" >
              <div class="rob-has-icon-right" data-toggle="dropdown" aria-expanded="true">
                <div class="rob-select-box rob-has-icon-right qb-select-g" v-on:change="change" >
                  <i class="rob-is-icon-right qb-icon-angle-down"></i>  {{ selected }} 
                </div>
                <div class="rob-select-items" >  
                  <div class="rob-select-item" v-for="option in options" v-bind:value="option.value" :key="option.value" >
                      {{option.text}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <transition name="fade">
        <div class="ui-meta" >
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
      <div class="ui-message-show-code">&#9660;显示代码</div>
    </div> 

  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      isopen: false,
      message: '111',
      selected: '请选择',
      options: [
        { text: '请选择1', value: '1' },
        { text: '请选择2', value: '2' },
        { text: '请选择3', value: '3' }
      ]
    }
  },
  methods: {
    toggle () {
      this.isopen = !this.isopen
    },
    change () {
      console.log(this.selected)
    }
  }
}
</script>
