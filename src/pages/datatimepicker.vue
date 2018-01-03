<template>
  <div class="ui-con-box">
    <h2>DateTimePicker 日期时间选择器</h2>
    <h5>在同一个选择器里选择日期和时间</h5>
    <h3>基础用法</h3>
    <h5>适日期</h5>

    <div class="ui-message-show mb60">
      <div class=" ui-msg-pd40">
       <div class="rob-row">
                            <div class="rob-col-lg-4 rob-col-xs-4 text-right">
                                <label for="inputEmail3" class="rob-input-label">日期范围：
                                </label>
                            </div>
                            <div class="rob-col-lg-12 rob-col-xs-12 rob-input-date">
                                <div class="rob-input-item rob-has-icon-right">
                                    <i class="rob-is-icon-right rob-icon rob-icon-home "></i>
                                    <input type="text" class="rob-input calendar6" id="inputEmail3" placeholder="请输入姓名">
                                </div>
                                <div class="rob-input-item rob-has-icon-right">
                                    <i class="rob-is-icon-right rob-icon rob-icon-home "></i>
                                    <input type="text" class="rob-input calendar7" id="inputEmail3" placeholder="请输入姓名">
                                </div>
                            </div>
                        </div>
      </div>
      <transition name="fade">
        <div class="ui-meta" >
          <div class="ui-description">

            <code>
              radio
            </code>

          </div>
          <div class="ui-highlight-code">
           
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
      isopen: false
    }
  },
  methods: {
    toggle () {
      this.isopen = !this.isopen
    }
  }
}
</script>
