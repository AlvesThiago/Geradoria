import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

function OutputSection() {
  const editorRef:any=useRef();

  return (
    <div className='bg-white shadow-md border rounded-lg'>
      <div className='flex justify-between items-center p-2' >
        <h2 className='font-medium text-lg'>Resultado</h2>
        <Button className='flex gap-2'><Copy  className='w-4 h-4'/> Copiar</Button>
      </div>
      <Editor
      ref={editorRef}
        initialValue="Seu resultado vai aparecer aqui!"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default OutputSection