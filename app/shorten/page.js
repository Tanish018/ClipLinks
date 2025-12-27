"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {

    const [url, setUrl] = useState("")
    const [shortUrl, setShortUrl] = useState("")
    const [generated, setGenerated] = useState(false)

    const generate = () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "url": url,
        "shortUrl": shortUrl
      })

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      }

      fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
          setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
          setUrl("")
          setShortUrl("")
          alert(result.message)
      })
      .catch((error) => console.error(error))
    }

  return (
    <div className="mx-auto w-[60%] h-[60vh] my-5 p-5 flex flex-col items-center gap-5 border-2 border-black rounded-lg bg-transparent shadow-lg">
        <div className='mb-10'>
            <h1 className='text-5xl font-bold'>Generate Your Shorten URLs</h1>
        </div>
        <div className='flex flex-col gap-3 items-center justify-center'>
            <input value={url} className='w-[650px] px-6 py-3 border border-black rounded-lg text-[20px] font-semibold' type="text" placeholder='Enter your URL' onChange={(e)=> {setUrl(e.target.value)}}/>
            <input value={shortUrl} className='w-[650px] px-6 py-3 border border-black rounded-lg text-[20px] font-semibold mb-6' type="text" placeholder='Enter your preferred short URL' onChange={(e)=> {setShortUrl(e.target.value)}}/>
            <Link href="/shorten"><button onClick={generate} className='cursor-pointer px-8 py-3 rounded-2xl bg-black text-white hover:ring-2 hover:ring-black hover:bg-white hover:text-black transition-all duration-300 font-bold text-[25px]'>Generate</button></Link>
        </div>

        {generated && <>
          <span className='text-center font-bold text-3xl'> Your Links </span>
          <code> <Link target='_blank' href={generated}>{generated}</Link></code>
        </>
        }
    </div>
  )
}

export default Shorten
