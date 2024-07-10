import Head from 'next/head'
import Benefits from '../blocks/Benefits';
import Break from '../blocks/Break';
import Epilogue from '../blocks/Epilogue';
import Features from '../blocks/Features';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Hero from '../blocks/Hero';
import Highlights from '../blocks/Highlights';
import Notice from '../components/Notice';
import data from '../global/global.json';
import { inter, geist_sans } from 'fonts/fonts'

export default function Home() {
  const downloadLink = "https://github.com/dieharders/ai-text-server/releases/latest/download/ObrewServer.WIN.Setup.exe"
  const downloadText = "Download Free"
  const downloadPlaceholderText = "you@email.com"

  return (
    <div className={`${geist_sans.className}`}>
      <Head>
        <title>{data.product}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Notice id="subscribed">Thank you for subscribing</Notice>
      <Header id="top" title={`🍺 ${data.product}`} />

      <main>
        <Hero
          title={<h1>Unlimited Ai <br /> for the masses</h1>}
          subtitle={data.subheadline}
          illustration=""
          subscribePlaceholder={downloadPlaceholderText}
          subscribeActionText={downloadText}
          subscribeLink={downloadLink}
          className={inter.className}
        />

        <Benefits
          background="alternate"
          title={data.benefits.headline}
          subtitle={data.benefits.subheadline}
          benefits={[
            { illustration: '', title: 'Your data stays on device', text: 'Choose your own provider and where to back it up. Data stays private.' },
            { illustration: '', title: 'Build your own tools', text: 'Stop waiting for new toys. Build your own Ai assistants easily with no code.' },
            { illustration: '', title: 'Unlimited Ai for free', text: 'Have large workloads or just want to run Ai all day long? You can for free!' },
          ]}
        />

        <Break
          title="Stop paying surprise API bills"
          subtitle="Ditch the subscriptions. Build and run Ai all day long for free!"
          illustration=""
          action="Download Now"
          onActionClick={() => window.scrollTo({ top: 99999, behavior: 'smooth' })}
        />

        <Highlights
          title="Ai Lego Blocks"
          subtitle="OpenBrew Ai is a collection of tools you can connect together"
          highlights={[
            { illustration: '', title: 'Text based responses to your requests', text: 'You can type, speak or even provide an image of your request. Bring together several Ai in a chat room and have them talk through a specific problem.' },
            { illustration: '', title: 'Build powerful workflows with drag & drop', text: 'OpenBrew Ai gives you the ability to build advanced systems that can automate your work or imitate behaviors. Building automated Ai agents is as easy as creating a todo list.' },
            { illustration: '', title: 'And much more...', text: 'Talk to your documents, get advice, create art, start a virtual company, whatever you want you can build it.' },
          ]}
        />

        <Features
          background="alternate"
          title="Feature list"
          subtitle="We are always adding new tools. Access new features when you update the app."
          features={[
            { illustration: '', title: 'Text Inference', text: 'Provide text based answers or completions to any request, uncensored. No more "Sorry, as an LLM I cannot answer that"' },
            { illustration: '', title: 'Search & Chat', text: 'Ask questions about documents or search for meaning in your data. Even search images based on a description!' },
            { illustration: '', title: 'Image Inference', text: 'Create beautiful images from a text prompt or image. Your images wont be subject to censor or watermarked.' },
            { illustration: '', title: 'Auto Agents', text: 'Easily build and deploy autonomous Ai that can perform tasks on your behalf.' },
            { illustration: '', title: 'Auto Workflows', text: 'Write out requirements for a task and have one or more specialized agents carry out the procedure at scale.' },
            { illustration: '', title: 'App Ecosystem', text: 'Take advantage of a growing list of apps. Gain access to hundreds of purpose built Ai.' },
          ]}
        />

        <Epilogue
          title="Start automating your life!"
          subtitle1="Download OpenBrew Ai and gain a new superpower!"
          subtitle2="Sign-up to be notified of product updates."
          illustration=""
          subscribePlaceholder={downloadPlaceholderText}
          subscribeActionText={downloadText}
          subscribeLink={downloadLink}
        />
      </main>

      <Footer
        title={`🍺 ${data.product}`}
      />
    </div>
  )
}
