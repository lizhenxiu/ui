<template>
  <div class="rob-container ui-index-page">
    <h2 class="rob-col-md-offset-4 rob-col-sm-offset-4">设计原则</h2>
    <div class="rob-col-md-offset-4 rob-col-sm-offset-4"> 
      <div class=" ui-ico rob-row"> 
      <div class="rob-col-md-6 rob-col-sm-12 rob-xs-12">
        <div class="ui-card">
          <img src="" alt="">
          <h4>1</h4>
        </div>
      </div>
      <div class="rob-col-md-6 rob-col-sm-12 rob-xs-12">
        <div class="ui-card">
           <img src="" alt="">
          <h4>1</h4>
        </div>
      </div>
      <div class="rob-col-md-6 rob-col-sm-12 rob-xs-12">
        <div class="ui-card">
           <img src="" alt="">
          <h4>1</h4>
        </div>
      </div>
      <div class="rob-col-md-6 rob-col-sm-12 rob-xs-12">
        <div class="ui-card">
           <img src="" alt="">
          <h4>1</h4>
        </div>
      </div>
    </div>
    <h3>一致性 Consistency</h3>
    <ul class="ui-pages-ul">
      <li>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</li>
      <li>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</li>
    </ul>
    <h3>反馈 Feedback</h3>
     <ul class="ui-pages-ul">
      <li>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</li>
      <li>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</li>
    </ul>
    <h3>效率 Efficiency</h3>
     <ul class="ui-pages-ul">
      <li>简化流程：设计简洁直观的操作流程；</li>
      <li>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</li>
      <li>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</li>
    </ul>
    <h3>可控 Controllability</h3>
    <ul class="ui-pages-ul">
      <li>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</li>
      <li>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</li>
    </ul>

    </div>

  </div>
</template>
<script type="text/javascript">
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss">
.ui-index-page{
  margin-top: 40px;
  .ui-ico{
    margin-bottom: 60px;
  }
  h2{
    font-weight: 400;
    color: #1f2f3d;
    margin-bottom: 60px;
  }
  .ui-card{
    background: #f4f6f8;
    height: 200px;
    text-align: center;
    margin-bottom: 20px;
  }
  h3{
    font-size: 18px;
    font-weight: 400;
    margin: 0 0 30px;
    color: #666666;
  }
  .ui-pages-ul{
    margin-bottom: 50px;
    padding-left: 0;
    li{
      font-size: 14px;
    margin-bottom: 10px;
    color: #7d7d7d;
    list-style: none;
    }
  }
}
</style>