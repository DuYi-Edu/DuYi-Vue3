<template>
  <div class="check-editor">
    <div class="check-editor-inner">
      <div
        class="checkbox"
        @click="handleCheck"
        :class="{ checked: modelValue }"
      ></div>
      <input
        type="text"
        class="editor"
        :value="text"
        @input="handleTextChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: Boolean,
    text: String,
    textModifiers: {
      default: () => ({}),
    },
  },
  setup(props, ctx) {
    const handleCheck = (e) => {
      ctx.emit("update:modelValue", !props.modelValue);
    };
    const handleTextChange = (e) => {
      let value = e.target.value;
      if (props.textModifiers && props.textModifiers.trim) {
        value = value.trim();
      }
      ctx.emit("update:text", value);
    };
    return {
      handleCheck,
      handleTextChange,
    };
  },
};
</script>

<style scoped>
.check-editor {
  cursor: pointer;
}
.check-editor-inner {
  display: flex;
  align-items: center;
}
.checkbox {
  width: 15px;
  height: 15px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  border-radius: 3px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkbox:hover,
.checkbox.checked {
  border-color: #409eff;
}
.checkbox.checked::after {
  content: "";
  border-radius: 2px;
  width: 9px;
  height: 9px;
  background: #409eff;
}
.editor {
  border: none;
  outline: none;
  margin-left: 5px;
  border-bottom: 1px solid #dcdfe6;
  font-size: inherit;
}
</style>
