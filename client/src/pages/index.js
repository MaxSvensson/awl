import Head from 'next/head'
import { useEffect } from 'react';

// Components
import Frame from '../components/Index/Frame/Frame';

export default function Home() {

  useEffect(() => {
    var msg = new SpeechSynthesisUtterance();
    msg.lang = "sv-SE"
    msg.text = "Det här är en fråga";
    window.speechSynthesis.speak(msg);
  }, [])

  return <div>
      <Head>
        <title>Prompt</title>  
      </Head>    
      <Frame>
        <h1>Fråga</h1>
      </Frame>
  </div>
}
