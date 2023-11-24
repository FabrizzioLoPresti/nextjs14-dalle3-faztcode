import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})


export const POST = async (req: NextRequest) => {
  // try {
  //   const { prompt } = await req.json();

  //   if (!prompt) {
  //     throw new Error('Prompt is required')
  //   }

  //   const images = await openai.images.generate({
  //     prompt,
  //     model: 'dall-e-2',
  //     size: '512x512',
  //     n: 1,
  //   })

  //   return NextResponse.json({
  //     url: images.data[0].url
  //   }, {
  //     status: 200
  //   })
  // } catch (err: any) {
  //   return NextResponse.json({
  //     error: err.message,
  //   }, {
  //     status: 400
  //   })
  // }
  return NextResponse.json({
    url: 'https://images.openai.com/blob/b196df3a-6fea-4d86-87b2-f9bb50be64c7/leaf.png'
  }, {
    status: 200
  })
}