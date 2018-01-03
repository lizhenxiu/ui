<template>
  <div class="ui-con-box">
    <h2>Upload 上传</h2>
    <h5>通过点击上传文件</h5>
    <h3 class="mb30">基本用法</h3>
  
      <div class="ui-message-show mb60">
        <div class=" ui-msg-pd40">
          <form action="#" class="ng-pristine ng-valid">

           
              <div class="rob-upload qb-container-g__upload">
                <span tabindex="0" class="rc-upload" role="button"><input type="file" multiple="" style="display: none;">
                  <div class="rob-upload-card">
                    <i class="rob-icon-delete qb-upload-close"></i>
                    <div class="rob-upload-card-type qb-icon-rob-icon-plus"></div>
                  </div>
                </span>
              </div>
               <div class="rob-upload qb-container-g__upload">
                <span tabindex="0" class="rc-upload" role="button"><input type="file" multiple="" style="display: none;">
                  <div class="rob-upload-card">
                    <i class="rob-icon-delete qb-upload-close"></i>
                    <div class="rob-upload-card-type qb-icon-rob-icon-plus"></div>
                  </div>
                </span>
              </div>
            

            
          </form>
        </div>
      
        <div class="ui-message-show-code"></div>
      </div>
   
  
  </div>
</template>
<style lang="css" scoped>
.rob-upload .rob-upload-card .rob-upload-card-type {
  margin: 21px 24px;
}

.rob-upload .rob-upload-card:hover {
  border: 1px solid #dc0000;
}
</style>
<script type="text/javascript">
export default {
  data () {
    return {
      value: '212'
    }
  }
}
</script>
