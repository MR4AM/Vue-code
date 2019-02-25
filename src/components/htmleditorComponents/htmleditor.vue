
<template>
  <div class="htmleditorCom">
    <h1 class="title">ja富文本编辑器</h1>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
    <button @click="prevLook()" class="prevLook">预览</button>
    <div class="prevModal" v-if="prevModal" @click="modalTirgle()">
        <div class="vHtml" v-html="content"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./htmleditor.scss";
</style>
 
<script>
//vue-quill-editor vue富文本编辑器官网https://quilljs.com/docs/themes/及常用参数理解
//1.只需要填写功能名的
//加粗 - bold；
//斜体 - italic
//下划线 - underline
//删除线 - strike
//引用- blockquote
//代码块 - code-block
//公式 - formula
//图片 - image
//视频 - video
//清除字体样式- clean
//这一类的引用 直接['name','name']这种格式就好了

//2.需要有默认值的
//标题 - header
//[{ 'header': 1 }, { 'header': 2 }] 值字体大小

//列表 - list
//[{ 'list': 'ordered'}, { 'list': 'bullet' }], 值ordered，bullet

//上标/下标 - script
//[{ 'script': 'sub'}, { 'script': 'super' }],  值sub，super

//缩进 - indent
//[{ 'indent': '-1'}, { 'indent': '+1' }], 值-1，+1等

//文本方向 - direction
//[{ 'direction': 'rtl' }],    值rtl
const baseOptions = [["bold", "italic", "underline"]];
import { quillEditor } from "vue-quill-editor";
export default {
  data() {
    return {
      content: null,
      prevModal:false,
      editorOption: {
        // modules: {
        //   toolbar:baseOptions //设置editor编辑选项卡的参数
        // }
      }
    };
  },
  methods: {
    onEditorBlur() {
      //失去焦点事件
    },
    onEditorFocus() {
      //获得焦点事件
    },
    onEditorChange() {
      //内容改变事件
    },
    prevLook(e){
        console.log(this.content,'检测编辑的htmljson');
        this.prevModal=true;
    },
    modalTirgle(){
        this.prevModal=false;
    }
  }
};
</script>