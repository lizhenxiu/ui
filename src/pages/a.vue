<template>
  <div class="ui-con-box">
    <h2>Message Box</h2>
    <h5>模拟系统的消息提示框实现的一套静态对话框组件，用于消息提示、确认消息和提交内容。</h5>
    <h3>消息提示</h3>
    <h5>当用户进行操作时会被触发，该对话框</h5>
    <div class="ui-message-show mb60">
      <div class="ui-msg-col">
        <span @click='openBox1()'>点击打开 Message Box</span>
      </div>
      <transition name="fade">
        <div class="ui-meta" v-if="isShow">
        <div class="ui-description">
          <p>以上三个方法都是对
            <code>$msgbox</code>方法的再包装。本例直接调用
            <code>$msgbox</code>方法，使用了
            <code>showCancelButton</code>字段，用于显示取消按钮。另外可使用
            <code>cancelButtonClass</code>为其添加自定义样式，使用
            <code>cancelButtonText</code>来自定义按钮文本（Confirm 按钮也具有相同的字段，在文末的字段说明中有完整的字段列表）。此例还使用了
            <code>beforeClose</code>属性，它的值是一个方法，会在 MessageBox 的实例关闭前被调用，同时暂停实例的关闭。它有三个参数：
            <code>action</code>、实例本身和
            <code>done</code>方法。使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加
            <code>loading</code>状态等；此时若需要关闭实例，可以调用
            <code>done</code>方法（若在
            <code>beforeClose</code>中没有调用
            <code>done</code>，则实例不会关闭）。</p>
        </div>
        <div class="ui-highlight-code">
          <code>

            export default { methods: { open4() { const h = this.$createElement; this.$msgbox({ title: '消息', message: h('p', null, [ h('span', null, '内容可以是 '), h('i', { style: 'color: teal' }, 'VNode') ]), showCancelButton: true, confirmButtonText: '确定', cancelButtonText: '取消', beforeClose: (action, instance, done) => { if (action === 'confirm') { instance.confirmButtonLoading = true; instance.confirmButtonText = '执行中...'; setTimeout(() => { done(); setTimeout(() => { instance.confirmButtonLoading = false; }, 300); }, 3000); } else { done(); } } }).then(action => { this.$message({ type: 'info', message: 'action: ' + action }); }); } } }
          </code>
        </div>
      </div>
      </transition>
      <div @click="toggle()" class="ui-message-show-code">&#9660;{{btnText}}</div>
    </div>


    <h3>确认消息</h3>
    <h5>提示用户确认其已经触发的操作，并询问用户是否用到此操作时会用到的对话框</h5>
  <div class="ui-message-show mb60">
      <div class="ui-msg-col">
        <span @click='openBox2()'>点击打开 Message Box</span>
      </div>
      <div class="ui-meta" v-if="isShow">
        <div class="ui-description">
          <p>以上三个方法都是对
            <code>$msgbox</code>方法的再包装。本例直接调用
            <code>$msgbox</code>方法，使用了
            <code>showCancelButton</code>字段，用于显示取消按钮。另外可使用
            <code>cancelButtonClass</code>为其添加自定义样式，使用
            <code>cancelButtonText</code>来自定义按钮文本（Confirm 按钮也具有相同的字段，在文末的字段说明中有完整的字段列表）。此例还使用了
            <code>beforeClose</code>属性，它的值是一个方法，会在 MessageBox 的实例关闭前被调用，同时暂停实例的关闭。它有三个参数：
            <code>action</code>、实例本身和
            <code>done</code>方法。使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加
            <code>loading</code>状态等；此时若需要关闭实例，可以调用
            <code>done</code>方法（若在
            <code>beforeClose</code>中没有调用
            <code>done</code>，则实例不会关闭）。</p>
        </div>
        <div class="ui-highlight-code">
          <code>

            export default { methods: { open4() { const h = this.$createElement; this.$msgbox({ title: '消息', message: h('p', null, [ h('span', null, '内容可以是 '), h('i', { style: 'color: teal' }, 'VNode') ]), showCancelButton: true, confirmButtonText: '确定', cancelButtonText: '取消', beforeClose: (action, instance, done) => { if (action === 'confirm') { instance.confirmButtonLoading = true; instance.confirmButtonText = '执行中...'; setTimeout(() => { done(); setTimeout(() => { instance.confirmButtonLoading = false; }, 300); }, 3000); } else { done(); } } }).then(action => { this.$message({ type: 'info', message: 'action: ' + action }); }); } } }
          </code>
        </div>
      </div>
      <div @click="toggle()" class="ui-message-show-code">&#9660;{{btnText}}</div>
    </div>




    <div class="rob-alert-cover" v-if="isvisible">
      <div class="rob-alert rob-alert-dismissible" role="alert ">
          <button type="button" class="rob-alert-close" data-dismiss="rob-alert" aria-label="Close" @click="openBox1()">
              <span aria-hidden="true">×</span>
          </button>
          <div class="rob-alert-content">
              <!--qb-icon-active  保存成功-->
              <!--qb-icon-failure 保存失败-->
              <i class="bg_icon qb-icon-active">
              </i>
              <div class="">
                  <div>*****保存成功</div>
              </div>
          </div>
          <div class="rob-alert-button-color">
              <button type="button" class="rob-btn rob-btn-danger rob-btn-circle ">保存成功</button>
          </div>
      </div>
    </div>

    <div class="rob-alert-cover" v-if="isvisible2">
      <div class="rob-alert rob-alert-dismissible" role="alert ">
        <button type="button" class="rob-alert-close" data-dismiss="rob-alert" aria-label="Close" @click="openBox2()">
          <span aria-hidden="true">×</span>
        </button>
        <div class="rob-alert-content">
          <div class="">
            <div>确定要删除吗？</div>
          </div>
        </div>
        <div class="rob-alert-button-color">
          <button type="button" class="rob-btn rob-btn-minor rob-btn-circle ">继续操作</button>
          <button type="button" class="rob-btn rob-btn-danger rob-btn-circle ">查看结果</button>
        </div>
      </div>
    </div>
  </div>
</template>
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
<style lang="scss" type="text/scss" rel="stylesheet/scss">
.mb60{
  margin-bottom: 60px;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
