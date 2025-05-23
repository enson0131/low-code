import {render as renderAmis, type SchemaObject} from 'amis';
import './App.css';
import {Editor} from 'amis-editor';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState<SchemaObject>({
    type: 'page',
    body: [
      {
        type: 'tpl',
        tpl: 'Hello World!'
      }
    ]
  });
  return (
    <>
     <Editor value={value} onChange={setValue} />
     <div>1</div>
    </>
    // <div>
    //     {renderAmis(
    //      {
    //        type: "page",
    //        body: [
    //         {
    //           type: "tpl",
    //           tpl: "Hello World!"
    //         },
    //         {
    //           type: "divider"
    //         },
    //         // {
    //         //   type: "form",
    //         //   body: [
    //         //     {
    //         //       type: "input-text",
    //         //       name: "name",
    //         //       label: "姓名"
    //         //     }
    //         //   ]
    //         // }
    //       ]
    //     }
    //     )}
    //   </div>
  )
}

export default App
