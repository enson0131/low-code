import React, { useState } from 'react';
import './app.module.less';
import Editor from './packages/Editor';
import jsonSchema from './data.json';

function App() {
  const [modelValue, setModelValue] = useState<any>(jsonSchema);
  return (
    <div styleName="app-container">
      <Editor modelValue={modelValue} onChange={setModelValue} />
    </div>
  );
}

export default App;
