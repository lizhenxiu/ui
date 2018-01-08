<template>
  <div class="ui-con-box">
    <h2>Message Box</h2>
    <h5>模拟系统的消息提示框实现的一套静态对话框组件，用于消息提示、确认消息和提交内容。</h5>
    <h3>消息提示1</h3>
    <h5>当用户进行操作时会被触发，该对话框</h5>
    <div class="ui-message-show  mb60">
      <div class="ui-msg-col ui-msg-pd40">
        <span @click='openBox(0)'>点击打开 Message Box</span>
      </div>
      <transition name="fade">
        <div class="ui-meta" v-show="isDivShow[0]">
          <div class="ui-description">
          
      <pre class="brush: html;">
        <code>
         <div id="alert1" class="rob-alert rob-alert-dismissible" role="alert ">
            <button type="button" class="rob-alert-close" data-dismiss="rob-alert" aria-label="Close">
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
        </code>
      </pre>
		
          </div>
          <div class="ui-highlight-code">
         
          </div>
        </div>
      </transition>
      <div @click="targetBtn(0)" class="ui-message-show-code">&#9660;{{btnText[0]}}</div>
    </div>


    <h3>消息提示2</h3>
    <h5>提示用户确认其已经触发的操作，并询问用户是否用到此操作时会用到的对话框</h5>
    <div class="ui-message-show mb60">
      <div class="ui-msg-col ui-msg-pd40">
        <span @click='openBox(1)'>点击打开 Message Box</span>
      </div>
      <div class="ui-meta" v-show="isDivShow[1]">
        <div class="ui-description">
          <pre class="brush: html;">
            <div id="alert2" class="rob-alert rob-alert-dismissible" role="alert ">
            <button type="button" class="rob-alert-close" data-dismiss="rob-alert" aria-label="Close">
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
                <button type="button" class="rob-btn rob-btn-minor rob-btn-circle ">继续操作</button>
                <button type="button" class="rob-btn rob-btn-danger rob-btn-circle ">查看结果</button>
            </div>
        </div>
          </pre>
        </div>
        <div class="ui-highlight-code">
        </div>
      </div>
      <div @click="targetBtn(1)" class="ui-message-show-code">&#9660;{{btnText[1]}}</div>
    </div>
    <h3>消息提示3</h3>
    <h5>提示用户确认其已经触发的操作，并询问用户是否用到此操作时会用到的对话框</h5>
    <div class="ui-message-show mb60">
      <div class="ui-msg-col ui-msg-pd40">
        <span @click='openBox(2)'>点击打开 Message Box</span>
      </div>
      <div class="ui-meta" v-show="isDivShow[2]">
        <div class="ui-description">
          <pre class="brush: html;">
            <div id="alert3" class="rob-alert rob-alert-dismissible" role="alert ">
            <button type="button" class="rob-alert-close" data-dismiss="rob-alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
            <div class="rob-alert-content">
                <i class="bg_icon qb-icon-failure">
                </i>
                <div class="">
                    <div>*****失败</div>
                </div>
            </div>
            <div class="rob-alert-button-color">
                <button type="button" class="rob-btn rob-btn-danger rob-btn-circle ">知道了</button>
            </div>
        </div>
          </pre>
        </div>
        <div class="ui-highlight-code">
        </div>
      </div>
      <div @click="targetBtn(2)" class="ui-message-show-code">&#9660;{{btnText[2]}}</div>
    </div>


    <h3>消息提示4</h3>
    <h5>提示用户确认其已经触发的操作，并询问用户是否用到此操作时会用到的对话框</h5>
    <div class="ui-message-show mb60">
      <div class="ui-msg-col ui-msg-pd40">
        <span @click='openBox(4)'>点击打开 Message Box</span>
      </div>
      <div class="ui-meta" v-show="isDivShow[3]">
        <div class="ui-description">
          <pre class="brush: html;">
            <div id="alert4" class="rob-alert rob-alert-dismissible" role="alert ">
            <button type="button" class="rob-alert-close" data-dismiss="rob-alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>

            <div class="rob-alert-content">

                <i class="bg_icon qb-icon-loading">
                </i>
                <div class="">
                    <div>处理中...</div>
                </div>
            </div>
        </div>
          </pre>
        </div>
        <div class="ui-highlight-code">
        
        </div>
      </div>
      <div @click="targetBtn(3)" class="ui-message-show-code">&#9660;{{btnText[3]}}</div>
    </div>



    <div class="rob-alert-cover" v-if="isBoxShow[0]">
      <div class="rob-alert rob-alert-dismissible" role="alert ">
        <button type="button" class="rob-alert-close" data-dismiss="rob-alert" aria-label="Close" @click="closeBox(0)">
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


    <div class="rob-alert-cover" v-if="isBoxShow[1]">
      <div class="rob-alert rob-alert-dismissible" role="alert ">
        <button type="button" class="rob-alert-close" data-dismiss="rob-alert" aria-label="Close" @click="closeBox(1)">
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


    <div class="rob-alert-cover" v-if="isBoxShow[2]">
      <div class="rob-alert rob-alert-dismissible" role="alert ">
        <button type="button" class="rob-alert-close" data-dismiss="rob-alert" aria-label="Close" @click="closeBox(2)">
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
          <button type="button" class="rob-btn rob-btn-minor rob-btn-circle ">继续操作</button>
          <button type="button" class="rob-btn rob-btn-danger rob-btn-circle ">查看结果</button>
        </div>
      </div>
    </div>


    <div class="rob-alert-cover" v-if="isBoxShow[3]">
      <div class="rob-alert rob-alert-dismissible" role="alert ">
        <button type="button" class="rob-alert-close" data-dismiss="rob-alert" aria-label="Close" @click="closeBox(3)">
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
          <button type="button" class="rob-btn rob-btn-minor rob-btn-circle ">继续操作</button>
          <button type="button" class="rob-btn rob-btn-danger rob-btn-circle ">查看结果</button>
        </div>
      </div>
    </div>

    <div class="rob-alert-cover" v-if="isBoxShow[4]">
    <div id="alert4" role="alert " class="rob-alert rob-alert-dismissible">
    <button type="button" data-dismiss="rob-alert" aria-label="Close" class="rob-alert-close"  @click="closeBox(4)">
        <span aria-hidden="true">×</span>
    </button>
    <div class="rob-alert-content">
        <i class="bg_icon qb-icon-loading">
        </i>
        <div>
            <div>处理中...</div>
        </div>
    </div>
    </div>
    </div>



  </div>


</template>
<script type="text/javascript">

  export default {
    data () {
      return {
        btnText: ['显示代码', '显示代码', '显示代码', '显示代码', '显示代码'],
        isBoxShow: [false],
        isDivShow: [false]
      }
    },
    methods: {
      targetBtn (i) {
        this.$set(this.isDivShow, i, !this.isDivShow[i])
        if (this.isDivShow[i]) {
          this.$set(this.btnText, i, '隐藏代码')
        } else {
          this.$set(this.btnText, i, '显示代码')
        }
      },
      openBox (i) {
        this.$set(this.isBoxShow, i, true)
      },
      closeBox (i) {
        this.$set(this.isBoxShow, i, false)
      }
    },
    beforeCreate () {
     
    },
    created () {
      
    },
    components: {},
    mounted () {
      
    }
  }
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss">
  .mb60 {
    margin-bottom: 60px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */
  {
    opacity: 0
  }
</style>
