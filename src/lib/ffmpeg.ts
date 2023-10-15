'use client'
import { FFmpeg } from "@ffmpeg/ffmpeg";

import { toBlobURL } from '@ffmpeg/util'

let ffmpeg: FFmpeg | null;

export async function getFFmpeg() {

  const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/umd';

  if (ffmpeg) {
    return ffmpeg;
  }

  ffmpeg = new FFmpeg()

  if (!ffmpeg.loaded) {
  

    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
    })
  }

  return ffmpeg;
}