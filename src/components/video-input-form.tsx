'use client'
import { FileVideo, Upload } from "lucide-react";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from "react";
import { getFFmpeg } from "@/lib/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

export function VideoInputForm() {

  const [videoFile, setVideoFile] = useState<File | null>(null);

  const promptInputRef = useRef<HTMLTextAreaElement>(null)



  function handleFileSelection(event:ChangeEvent<HTMLInputElement>){
   const { files } = event.currentTarget;

   if(!files) {
    return
   }

   const selectedFile = files[0];

   setVideoFile(selectedFile);

  }

  const previewURL = useMemo(()=> {

    if(!videoFile) {
      return null
    }

    return URL.createObjectURL(videoFile);

  },[videoFile]);


  async function convertVideoToAudio(video: File) {
    console.log('Convert started.');

    const ffmpeg = await getFFmpeg();

    await ffmpeg.writeFile('input.mp4',await fetchFile(video));

    ffmpeg.on('progress', progress => {
      console.log('Convert progress: ' + Math.round(progress.progress * 100));
    });

    await ffmpeg.exec([
      '-i',
      'input.mp4',
      '-map',
      '0:a',
      '-b:a',
      '20k',
      '-acodec',
      'libmp3lame',
      'output.mp3'
    ]);

    const data = await ffmpeg.readFile('output.mp3');

    const audioFileBlob = new Blob([data],{type: 'audio/mpeg'});
    const audioFile = new File([audioFileBlob],'audio.mp3', {
      type:'audio/mpeg',  
    });

    console.log('Convert finished.');

    return audioFile;

  }

  async function handleUploadVideo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const prompt = promptInputRef.current?.value;

    if(!videoFile){
      return
    }

    const audioFile = await convertVideoToAudio(videoFile);

    console.log(audioFile); 
  }

  return (
    <form onSubmit={handleUploadVideo} className='space-y-4'>
            <label 
              htmlFor="video"
              className='relative border border-dashed text-sm flex rounded-md aspect-video cursor-pointer flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5'
            >
              {
                previewURL ? (<video src={previewURL} controls={false} className="pointer-events-none absolute inset-0"/>) : (
                  <>
                    <FileVideo 
                      className='h-5 w-5'
                    />
                     Selecione um vídeo
                    </>
                )
              }
             
            </label>
            <input type="file" id="video" accept='video/mp4' className='sr-only' onChange={handleFileSelection}/>
            
            <Separator />

            <div className="space-y-1">
               <Label htmlFor='transcription_prompt'>Prompt de Transcricao</Label>
               <Textarea
                ref={promptInputRef}
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
  )
}