import {FileVideo, Github, Upload, Wand2} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col'>
      <header className= "px-6 py-3 flex items-center justify-between border-b">
        <h1 className= "text-xl">upload.ai</h1>
        <div className="flex items-center justify-between gap-3">
          <span
            className='text-sm text-muted-foreground'
          >
            Desenvolvido ⚙️🛠️ por Danilo Gomes
          </span>

          <Separator 
            orientation="vertical"
            className='h-6'
          />        
          <Button
            variant="outline"
          >
            <Github className='w-4 h-4 mr-2'/>
            GitHub
          </Button>
        </div>
      </header>
      <section
        className='flex flex-1 gap-6 p-6'
      >
        <div 
          className= 'flex flex-1 flex-col'
        >
          <div className='grid grid-rows-2 gap-4 flex-1'>

          <Textarea
            placeholder='Inclua o prompt para IA...'
            className='resize-none leading-relaxed p-5'
          />
          <Textarea
            placeholder='Resultado gerado pela IA...'
            className='resize-none leading-relaxed'
            readOnly
          />
           

          </div>
          <p className='text-sm text-muted-foreground '>
              Lembre-se: Você pode utilizar a variável <code className="text-violet-500"> {'{transcription}'}</code> no seu prompt para adicionar o conteúdo do vídeo selecionado.
            </p>
        </div>
        <aside
          className='w-80 space-y-4'
        >
          <form className='space-y-4'>
            <label 
              htmlFor="video"
              className='border border-dashed text-sm flex rounded-md aspect-video cursor-pointer flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5'
            >
              <FileVideo 
                className='h-5 w-5'
              />
              Selecione um vídeo
            </label>
            <input type="file" id="video" accept='video/mp4' className='sr-only'/>
            
            <Separator />

            <div className="space-y-1">
               <Label htmlFor='transcription_prompt'>Prompt de Transcricao</Label>
               <Textarea
                id='transcription_prompt'
                placeholder='Inclua palavras chave mencionadas no vídeo separadas por vírgula (,)'
                className='h-20 resize-none leading-relaxed'
                
              />
            </div>

            <Button
              variant="outline"
              type="submit"
              className='w-full'
            >
              Carregar vídeo
              <Upload className='w-4 h-4 ml-2'/>
            </Button>

          </form>

          <Separator />

          <form className="space-y-4">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um Prompt.."></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Título do Youtube</SelectItem>
                  <SelectItem value="description">Descricao do vídeo</SelectItem>
                </SelectContent>
              </Select>
             
            </div>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue='gpt3.5'>
                <SelectTrigger>
                  <SelectValue></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic"
              >Voce poderá customizar essa opcao em breve</span>
            </div>
            
            <Separator />

            <div className="space-y-3">
                <Label>Temperatura</Label>
                <Slider 
                  min={0}
                  max={1}
                  step={0.1}
                />
                <span className="block text-xs text-muted-foreground italic leading-relaxed"> 
                  Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.
                </span>
            </div>
          
          
            <Separator />

            <Button className="w-full">
              Executar
              <Wand2 className="ml-2 w-4 h-4"/>
            </Button>
          
          </form>

         

         

        </aside>
      </section>
    </main>
  )
}
