<template>
  <div class="ui-con-box">
    <h2>Input 输入框</h2>
    <h5>通过鼠标或键盘输入字符</h5>
    <h3>基本用法</h3>
    <div class=" ui-msg-pd40">
      
        <div class="ui-message-show mb60">
          <div class=" ui-msg-pd40">
            <form action="#" class="ng-pristine ng-valid">
              <div class="rob-col-lg-12 rob-col-md-12 rob-col-sm-12 rob-col-xs-24">
                <div class="rob-input-item">
                  <input type="text" class="rob-input" id="inputEmail3" placeholder="请输入姓名">
                </div>
              </div>
            </form>
          </div>
          <div class="ui-message-show-code"></div>
        </div>
   
    </div>

    <h3>禁用状态</h3>
    <div class=" ui-msg-pd40">
        <div class="ui-message-show mb60">
          <div class=" ui-msg-pd40">
            <form action="#" class="ng-pristine ng-valid">
              <div class="rob-col-lg-12 rob-col-md-12 rob-col-sm-12 rob-col-xs-24">
                <div class="rob-input-item">
                  <input type="text" class="rob-input" id="inputEmail3" placeholder="请输入姓名" disabled>
                </div>
              </div>
            </form>
          </div>
          <div class="ui-message-show-code"></div>
        </div>
    </div>

    <h3>带 icon 的输入框</h3>
    <div class=" ui-msg-pd40">
        <div class="ui-message-show mb60">
          <div class=" ui-msg-pd40">
            <form action="#" class="ng-pristine ng-valid">
              <div class="rob-col-lg-12 rob-col-md-12 rob-col-sm-12 rob-col-xs-24">
                <div class="rob-input-item rob-has-icon-right">
                  <em class="rob-is-icon-right rob-icon qb-icon-calendar"></em>
                  <input type="text" class="rob-input" id="inputEmail3" placeholder="请输入姓名">
                </div>
              </div>
            </form>
          </div>
          <div class="ui-message-show-code"></div>
        </div>
    </div>

     <h3>文本域</h3>
     <h5>可调整大小，用于输入多行文本信息</h5>
    <div class=" ui-msg-pd40">
    
        <div class="ui-message-show mb60">
          <div class=" ui-msg-pd40">
            <form action="#" class="ng-pristine ng-valid">
              <div class="rob-col-lg-12 rob-col-md-12 rob-col-sm-12 rob-col-xs-24">
                <textarea class="rob-input rob-input-textarea" rows="3"></textarea>
              </div>
            </form>
          </div>
          <div class="ui-message-show-code"></div>
        </div>
     
    </div>


  </div>

  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      value: '212'
    }
  }
}
</script>
