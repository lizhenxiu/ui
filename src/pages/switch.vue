<template>
  <div class="ui-con-box">
    <h2>Switch 开关</h2>
    <h5>表示两种相互对立的状态间的切换，多用于触发「开/关」。</h5>
    <h3 class="mb30">基本用法</h3>
      <div class="ui-message-show mb60">
        <div class=" ui-msg-pd40">
          <form action="#" class="ng-pristine ng-valid">
            <section class="code-box-demo">
              <div class="rob-switch">
                <label>
                  关闭
                  <input type="checkbox">
                  <span class="rob-switch-lever"></span>
                </label>
              </div>
              <div class="rob-switch">
                <label>
                  <input type="checkbox" checked="checked">
                  <span class="rob-switch-lever"></span> 打开
                </label>
              </div>
            </section>
          </form>
        </div>
        <div class="ui-message-show-code"></div>
      </div>
    <h3 class="mb30">禁用状态</h3>
      <div class="ui-message-show mb60">
        <div class=" ui-msg-pd40">
          <form action="#" class="ng-pristine ng-valid">
            <section class="code-box-demo">
              <div class="rob-switch">
                <label>
                  关闭
                  <input type="checkbox" disabled="disabled">
                  <span class="rob-switch-lever "></span>
                </label>
              </div>
              <div class="rob-switch">
                <label>
                  <input type="checkbox" checked="checked" disabled>
                  <span class="rob-switch-lever switch-disabled"></span> 打开
                </label>
              </div>
            </section>
          </form>
        </div>
        <div class="ui-message-show-code"></div>
      </div>
 <h3 class="mb30">两种大小</h3>
      <div class="ui-message-show mb60">
        <div class=" ui-msg-pd40">
          <form action="#" class="ng-pristine ng-valid">
            <section class="code-box-demo">
              <div class="rob-switch">
                <label>
                  关闭
                  <input type="checkbox" >
                  <span class="rob-switch-lever "></span>
                </label>
              </div>
              <div class="rob-switch">
                <label>
                  关闭
                  <input type="checkbox" >
                  <span class="rob-switch-two rob-switch-two-small"></span>
                </label>
              </div>
            </section>
          </form>
        </div>
        <div class="ui-message-show-code"></div>
      </div>
    
  </div>
</template>
<style lang="css" scoped>
.rob-switch,
.rob-switch * {
  -webkit-user-select: none;
  display: inline-block;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
}

.rob-switch label {
  cursor: pointer;
}

.rob-switch label input[type=checkbox] {
  opacity: 0;
  width: 0;
  height: 0;
}
input[disabled]{
    border: 1px solid #DDD;
    background-color: #F5F5F5;
    color:#ACA899;
}
.rob-switch label input[disabled]:checked+.rob-switch-lever{
 background-color: #dc0000;
}
.rob-switch label input[type=checkbox]:checked+.rob-switch-lever {
  background-color: #108ee9;
}

.rob-switch label input[type=checkbox]:checked+.rob-switch-lever:after {
  background-color: #fff;
  left: 24px;
}

.rob-switch label .rob-switch-lever {
  content: "";
  display: inline-block;
  position: relative;
  width: 44px;
  height: 23px;
  background-color: #c0c0c0;
  border-radius: 15px;
  margin-right: 10px;
  transition: background 0.3s ease;
  vertical-align: middle;
  margin: 0 16px;
}

.rob-switch label .rob-switch-lever:after {
  content: "";
  position: absolute;
  display: inline-block;
  width: 19px;
  height: 19px;
  border-radius: 21px;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);
  left: 2px;
  top: 2px;
  transition: left 0.2s ease, background .2s ease, box-shadow 0.1s ease;
  background-color: #fff;
}
.rob-switch-two {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 23px;
  min-width: 44px;
  line-height: 20px;
  vertical-align: middle;
  border-radius: 21px;
  border: 1px solid #ccc;
  background-color: rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all .3s;
  -webkit-user-select: none;
  user-select: none;
}

.rob-switch-two-inner {
  color: #fff;
  font-size: 12px;
  margin-left: 24px;
  margin-right: 6px;
  display: block;
  line-height: 23px;
}

.rob-switch-two:after {
  position: absolute;
  width: 19px;
  height: 19px;
  left: 1px;
  top: 1px;
  border-radius: 21px;
  background-color: #fff;
  content: " ";
  cursor: pointer;
  transition: all .3s, width .3s;
}

.rob-switch-two:active:after {
  width: 24px;
}

.rob-switch-two:focus {
  box-shadow: 0 0 0 2px rgba(16, 142, 233, 0.2);
  outline: 0;
}

.rob-switch-two:focus:hover {
  box-shadow: none;
}

.rob-switch-two-small {
  height: 14px;
  min-width: 28px;
  line-height: 12px;
}

.rob-switch-two-small .rob-switch-two-inner {
  margin-left: 18px;
  margin-right: 3px;
  line-height: 12px;
}

.rob-switch-two-small:after {
  width: 12px;
  height: 12px;
  top: 0;
  left: .5px;
}

.rob-switch-two-small:active:after {
  width: 16px;
}

.rob-switch-two-small.rob-switch-two-checked:after {
  left: 100%;
  margin-left: -12.5px;
}

.rob-switch-two-small.rob-switch-two-checked .rob-switch-two-inner {
  margin-left: 3px;
  margin-right: 18px;
}

.rob-switch-two-small:active.rob-switch-two-checked:after {
  margin-left: -16.5px;
}

.rob-switch-two-checked {
  border-color: #108ee9;
  background-color: #108ee9;
}

.rob-switch-two-checked .rob-switch-two-inner {
  margin-left: 6px;
  margin-right: 24px;
}

.rob-switch-two-checked:after {
  left: 100%;
  margin-left: -19px;
}

.rob-switch-two-checked:active:after {
  margin-left: -25px;
}

.rob-switch-two-disabled {
  cursor: not-allowed;
  background: #f4f4f4;
  border-color: #f4f4f4;
}

.rob-switch-two-disabled:after {
  background: #ccc;
  cursor: not-allowed;
}

.rob-switch-two-disabled .rob-switch-two-inner {
  color: rgba(0, 0, 0, 0.25);
}

.switch-disabled{
  pointer-events: none;
    opacity: 0.4;
}
</style>
<script type="text/javascript">

</script>
