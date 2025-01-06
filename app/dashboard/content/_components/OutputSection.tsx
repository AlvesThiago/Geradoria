'use client'
import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  // Definindo o tipo corretamente para a referência
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-md border rounded-lg">
      <div className="flex justify-between items-center p-2">
        <h2 className="font-medium text-lg">Resultado</h2>
        <Button 
          className="flex gap-2" 
          onClick={() => navigator.clipboard.writeText(aiOutput)}
        >
          <Copy className="w-4 h-4" /> Copiar
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Seu resultado vai aparecer aqui!"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => {
          const markdown = editorRef.current?.getInstance().getMarkdown();
          console.log(markdown);
        }}
      />
    </div>
  );
}

export default OutputSection;
