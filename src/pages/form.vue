<template>
  <div class="ui-con-box">
    <h2>Form 表单</h2>
    <h5>由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据</h5>
    <h3>典型表单1</h3>
    <div class=" ui-msg-pd40">
      <div class="ui-message-show mb60">
        <div class=" ui-msg-pd40">
          <div class="rob-row text-center qb-form-group-b10-g  qb-form-pd-g__xs-label">
            <div class="rob-form-group rob-col-lg-24">
              <div class="rob-col-lg-5 rob-col-md-5 rob-col-sm-5 rob-col-xs-24 text-left">
                <label class="rob-input-label">用户名用户名用户名：
                </label>
              </div>
              <div class="rob-col-lg-10 rob-col-md-10 rob-col-sm-10 rob-col-xs-24 text-left">
                <label class="rob-input-label">用户名123
                </label>
              </div>
              <div class="rob-col-lg-9 rob-col-md-9 rob-col-sm-9 rob-col-xs-24 qb-pd0-g">
                <div class="qb-red-g rob-input-label text-left "></div>
              </div>
            </div>

            <div class="rob-form-group rob-col-lg-24">
              <div class="rob-col-lg-5 rob-col-md-5 rob-col-sm-5 rob-col-xs-24 text-left">
                <label class="rob-input-label">用户姓名用户姓名1名1：
                </label>
              </div>
              <div class="rob-col-lg-10 rob-col-md-10 rob-col-sm-10 rob-col-xs-24">
                <div class="rob-input-item">
                  <input type="text" class="rob-input" placeholder="请输入用户姓名">
                </div>
                <div class="rob-error-message text-left qb-has-error">
                  <i class="rob-icon-calendar"></i> 使用单一的一组 .rob-col-md-* 栅格类内。
                </div>
              </div>
              <div class="rob-col-lg-9 rob-col-md-9 rob-col-sm-9 rob-col-xs-24 qb-pd0-g">
                <div class="qb-red-g rob-input-label text-left ">
                  <i class="qb-icon-report1"></i>错误错误错误错误错误错误错误错误错误我们</div>
              </div>
            </div>
            <div class="rob-form-group rob-col-lg-24">
              <div class="rob-col-lg-5 rob-col-md-5 rob-col-sm-5 rob-col-xs-24 text-left">
                <label class="rob-input-label">手机号码：
                </label>
              </div>
              <div class="rob-col-lg-10 rob-col-md-10 rob-col-sm-10 rob-col-xs-24">
                <div class="rob-input-item">
                  <input type="text" class="rob-input" placeholder="请输入手机号码">
                </div>
              </div>
              <div class="rob-col-lg-9 rob-col-md-9 rob-col-sm-9 rob-col-xs-24 qb-pd0-g">
                <div class="qb-red-g rob-input-label text-left ">
                  <i class="qb-icon-report1"></i>111</div>
              </div>
            </div>

            <div class="rob-form-group rob-col-lg-24">
              <div class="rob-col-lg-5 rob-col-md-5 rob-col-sm-5 rob-col-xs-24 text-left">
                <label class="rob-input-label">邮箱地址：
                </label>
              </div>
              <div class="rob-col-lg-10 rob-col-md-10 rob-col-sm-10 rob-col-xs-24">
                <div class="rob-input-item">
                  <input type="text" class="rob-input" placeholder="请输入邮箱地址">
                </div>
              </div>
              <div class="rob-col-lg-9 rob-col-md-9 rob-col-sm-9 rob-col-xs-24 qb-pd0-g">
                <div class="qb-red-g rob-input-label text-left ">
                  <i class="qb-icon-report1"></i>111</div>
              </div>
            </div>

            <div class="rob-form-group rob-col-lg-24">
              <div class="rob-col-lg-5 rob-col-md-5 rob-col-sm-5 rob-col-xs-24 text-left">
                <label class="rob-input-label">身份证号：
                </label>
              </div>
              <div class="rob-col-lg-10 rob-col-md-10 rob-col-sm-10 rob-col-xs-24">
                <div class="rob-input-item">
                  <input type="text" class="rob-input" placeholder="请输入身份证号">
                </div>
              </div>
              <div class="rob-col-lg-9 rob-col-md-9 rob-col-sm-9 rob-col-xs-24 qb-pd0-g">
                <div class="qb-red-g rob-input-label text-left ">
                  <i class="qb-icon-report1"></i>111</div>
              </div>
            </div>

            <div class="rob-form-group rob-col-lg-24">
              <div class="rob-col-lg-5 rob-col-md-5 rob-col-sm-5 rob-col-xs-24 text-left">
                <label class="rob-input-label">是否申请数字证书：
                </label>
              </div>
              <div class="rob-col-lg-10 rob-col-md-10 rob-col-sm-10 rob-col-xs-24 text-left">
                <!-- 单选 间隔 -->
                <input class="rob-radio-with-gap" name="group2" type="radio" id="test4">
                <label for="test4">是</label>
                <!-- 单选 间隔 选中 -->
                <input class="rob-radio-with-gap" name="group2" checked="checked" type="radio" id="test5">
                <label for="test5">否</label>

                <p class="qb-l40-g">
                  <span class="qb-red-g">*</span>如不申请数字证书，仅可进行账户查询、限等操作</p>
              </div>
              <div class="rob-col-lg-9 rob-col-md-9 rob-col-sm-9 rob-col-xs-24 qb-pd0-g">
                <div class="qb-red-g rob-input-label text-left ">
                  <i class="qb-icon-report1"></i>111</div>
              </div>
            </div>

            <div class="rob-form-group rob-col-lg-24">
              <div class="rob-col-lg-5 rob-col-md-5 rob-col-sm-5 rob-col-xs-24 text-left">
                <label class="rob-input-label">初始登录密码：
                </label>
              </div>
              <div class="rob-col-lg-10 rob-col-md-10 rob-col-sm-10 rob-col-xs-24">
                <div class="rob-input-item">
                  <input type="text" class="rob-input" placeholder="请输入初始登录密码">
                </div>
              </div>
              <div class="rob-col-lg-9 rob-col-md-9 rob-col-sm-9 rob-col-xs-24 qb-pd0-g">
                <div class="qb-red-g rob-input-label text-left ">
                  <i class="qb-icon-report1"></i>错误</div>
              </div>
            </div>

            <div class="rob-form-group rob-col-lg-24">
              <div class="rob-col-lg-5 rob-col-md-5 rob-col-sm-5 rob-col-xs-24 text-left">
                <label class="rob-input-label">备注：
                </label>
              </div>
              <div class="rob-col-lg-10 rob-col-md-10 rob-col-sm-10 rob-col-xs-24">
                <div class="rob-input-item">
                  <input type="text" class="rob-input" placeholder="请输入备注(选填)">
                </div>
              </div>
              <div class="rob-col-lg-9 rob-col-md-9 rob-col-sm-9 rob-col-xs-24 qb-pd0-g">
                <div class="qb-red-g rob-input-label text-left ">
                  <i class="qb-icon-report1"></i>111</div>
              </div>
            </div>

          </div>
        </div>
        <div class="ui-message-show-code"></div>
      </div>

    </div>

    <h3>典型表单2</h3>
    <div class=" ui-msg-pd40">
      <div class="ui-message-show mb60">
        <div class=" ui-msg-pd40">
          <div class="qb-form-group-g clearfix qb-media-height qb-form-group-b10-g qb-form-pd-g__xs-label">

            <div class="rob-form-group  rob-col-lg-12 rob-col-md-offset-6 rob-col-md-12">
              <div class="rob-col-lg-6 rob-col-md-6 rob-col-sm-24 rob-col-xs-24 ">
                <label for="inputEmail3" class="rob-input-label ">用户名：
                </label>
              </div>
              <div class="rob-col-lg-18 rob-col-md-18 rob-col-sm-24 rob-col-xs-24">
                <div class="rob-input-item">
                  <input type="text" class="rob-input" id="inputEmail3" placeholder="请输入用户姓名">
                </div>
              </div>
            </div>
            <div class="rob-form-group rob-form-group-has-button rob-col-lg-offset-6 rob-col-lg-12 rob-col-md-offset-6 rob-col-md-12">
              <div class="rob-col-lg-6 rob-col-md-6 rob-col-sm-24 rob-col-xs-24 ">
                <label for="inputEmail3" class="rob-input-label ">用户姓名：
                </label>
              </div>
              <div class="rob-col-lg-18 rob-col-md-18 rob-col-sm-24 rob-col-xs-24">
                <div class="rob-input-item  qb-position-relative-g rob-form-group">
                  <input type="text" class="rob-input" id="inputEmail3" placeholder="">
                </div>

              </div>

              <span class="qb-form-group-buttonbox">
                <!--qb-icon-add-hover图标点击样式-->
                <!-- <i class="qb-icon-add"></i> -->
              </span>
              <span class="qb-form-group-buttonbox">
                <button class="rob-btn rob-btn-minor rob-btn-circle " type="button">从用户中选择</button>
              </span>
            </div>

            <div class="rob-form-group rob-form-group-has-button rob-col-lg-offset-6 rob-col-lg-12 rob-col-md-offset-6 rob-col-md-12">
              <div class="rob-col-lg-6 rob-col-md-6 rob-col-sm-24 rob-col-xs-24 ">
                <label for="inputEmail3" class="rob-input-label ">
                </label>
              </div>
              <div class="rob-col-lg-18 rob-col-md-18 rob-col-sm-24 rob-col-xs-24">
                <ul class="qb-money_list-g" style="display: block">
                  <li>余额(元):10000.00</li>
                  <li class="rob-row">
                    <div class="rob-col-md-12 rob-col-sm-12">可用余额(元):10000.00</div>
                    <div class="rob-col-md-12 rob-col-sm-12">冻结余额(元):10000.00</div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="rob-form-group rob-col-lg-12 rob-col-md-offset-6 rob-col-md-12">
              <div class="rob-col-lg-6 rob-col-md-6 rob-col-sm-24 rob-col-xs-24 ">
                <label for="inputEmail3" class="rob-input-label ">账户2：
                </label>
              </div>
              <div class="rob-col-lg-18 rob-col-md-18 rob-col-sm-24 rob-col-xs-24">
                <div class="rob-input-item qb-position-relative-g ">
                  <input type="text" class="rob-input" id="inputEmail3" placeholder="">
                  <span class="qb-pos-rg-g">
                    <i class="qb-icon-delete1"></i>
                  </span>
                </div>
              </div>
            </div>

            <div class="rob-form-group rob-col-lg-12 rob-col-md-offset-6 rob-col-md-12">
              <div class="rob-col-lg-6 rob-col-md-6 rob-col-sm-24 rob-col-xs-24 ">
                <label for="inputEmail3" class="rob-input-label ">摘要：
                </label>
              </div>
              <div class="rob-col-lg-18 rob-col-md-18 rob-col-sm-24 rob-col-xs-24">

                <textarea class="rob-input rob-input-textarea" rows="3"></textarea>

              </div>
            </div>

            <div class="rob-form-group rob-col-lg-12 rob-col-md-offset-6 rob-col-md-12">
              <div class="rob-col-lg-6 rob-col-md-6 rob-col-sm-24 rob-col-xs-24 ">
                <label for="inputEmail3" class="rob-input-label ">限制额度(元)：
                </label>
              </div>
              <div class="rob-col-lg-18 rob-col-md-18 rob-col-sm-24 rob-col-xs-24">
                <div class="rob-input-item">
                  <input type="text" class="rob-input" id="inputEmail3" placeholder="">
                </div>
              </div>
            </div>

            <div class="rob-form-group rob-col-lg-12 rob-col-md-offset-6 rob-col-md-12">
              <div class="rob-col-lg-6 rob-col-md-6 rob-col-sm-24 rob-col-xs-24 ">
                <label for="inputEmail3" class="rob-input-label ">摘要：
                </label>
              </div>
              <div class="rob-col-lg-18 rob-col-md-18 rob-col-sm-24 rob-col-xs-24">
                <textarea class="rob-input rob-input-textarea" rows="3"></textarea>
              </div>
            </div>

            <div class="rob-form-group  rob-col-lg-12 rob-col-md-offset-6 rob-col-md-12">
              <div class="rob-col-lg-6 rob-col-md-6 rob-col-sm-24 rob-col-xs-24 ">
                <label for="inputEmail3" class="rob-input-label ">是否申请数字证书：
                </label>
              </div>
              <div class="rob-col-lg-18 rob-col-md-18 rob-col-sm-24 rob-col-xs-24 qb-radio-line-height">
                <input class="rob-radio-with-gap" name="group2" type="radio" id="test1">
                <label for="test1">间隔</label>

                <input class="rob-radio-with-gap" name="group2" type="radio" id="test2">
                <label for="test2">间隔</label>

                <span>如不申请数字证书,仅可进行账户查询、限额付款等操作</span>
              </div>
            </div>

          </div>
        </div>
        <div class="ui-message-show-code"></div>
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
