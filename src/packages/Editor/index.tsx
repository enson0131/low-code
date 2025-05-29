import React from 'react';
import './index.module.less';

interface EditorProps {
  modelValue: any;
  onChange: (value: any) => void;
}

function Editor({ modelValue, onChange }: EditorProps) {
  console.log(modelValue);
  return (
    <div styleName="editor-container">
      <div styleName="editor-header"></div>
      <div styleName="editor-left"></div>
      <div styleName="editor-content"></div>
      <div styleName="editor-right"></div>
    </div>
  );
}

export default Editor;
