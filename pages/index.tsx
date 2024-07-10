import styles from './index.module.css';
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
import SubscribeInput from '../components/SubscribeInput';
import Button from '../components/Button';
import data from '../global/global.json';
import { inter, geist_sans } from 'fonts/fonts'

export default function Home() {
  const downloadLink = "https://github.com/dieharders/ai-text-server/releases/latest/download/ObrewServer.WIN.Setup.exe"

  return (
    <div className={`${geist_sans.className}`}>
      <Head>
        <title>Obrew - Fast, private Ai for the masses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Notice id="subscribed">Thank you for subscribing!</Notice>
      <Header id="top" title={`🍺 ${data.product}`} />

      <main>
        <Hero
          title={<h1>Unlimited Ai</h1>}
          subtitle={data.subheadline}
          illustration=""
          className={inter.className}
        >
          <Button
            className={styles.btn}
            href={downloadLink}
            onClick={() => { }}
            size="large"
            type="custom"
            location="body"
          >
            👏 Download for Windows
          </Button>
          <p style={{ marginTop: '2rem', color: 'var(--text-shade)', textAlign: 'center' }}>
            <a
              style={{ textDecoration: 'underline' }}
              href="https://github.com/dieharders/ai-text-server/releases">
              Obrew Engine v0.7.0 live</a> | Free & Open Source
          </p>
        </Hero>

        <Benefits
          background="alternate"
          title={data.benefits.headline}
          subtitle={data.benefits.subheadline}
          benefits={[
            { illustration: '', title: 'Your data stays on device 💻', text: 'Everything you upload or type is stored on your device. Data stays private.' },
            { illustration: '', title: 'Build your own tools 🧰', text: 'Stop waiting for new toys. Build your own bots easily with no code needed.' },
            { illustration: '', title: 'Unlimited Ai for free 🌟', text: 'Have large workloads or just want to run Ai all day long? You can for free!' },
          ]}
        />

        <Break
          title="Stop paying API bills"
          subtitle="Ditch the subscriptions. Build and run Ai all day long for free!"
          illustration=""
          action="Download Now"
          onActionClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />

        <Highlights
          title="Ai Engine"
          subtitle="Obrew is like a game engine for Ai tools. It has everything you need to build on top of."
          highlights={[
            { illustration: '', title: 'Have conversations with custom assistants', text: 'You can type, speak or even provide an image of your request. Bring together several Ai in a chat room and have them talk through a specific problem.' },
            { illustration: '', title: 'Build workflows with natural language', text: 'Obrew gives you the ability to build advanced systems that can automate your work or imitate behaviors. Building automated Ai agents is as easy as creating a todo list.' },
            { illustration: '', title: 'And much more...', text: 'Talk to your documents, get advice, create art, start a virtual company, whatever you want you can build.' },
          ]}
        />

        <Features
          background="alternate"
          title="Feature list"
          subtitle="Obrew is built to be moddable like a video game. Dont see a feature? Mod it yourself!"
          features={[
            { illustration: '', title: 'Uncensored Text', text: 'Get answers to any request, uncensored. No more "Sorry, I cannot answer that".' },
            { illustration: '', title: 'Search & Discuss', text: 'Ask questions or search for meaning in your data. Even find images based on a description!' },
            { illustration: '', title: 'Uncensored Images', text: 'Create imagery without limits. Your output wont be subject to censors or watermarked.' },
            { illustration: '', title: 'Agents', text: 'Easily build and deploy autonomous Ai that can perform tasks on your behalf.' },
            { illustration: '', title: 'Workflows', text: 'Write out tasks in natural language and have them carries out by custom bots that you build.' },
            { illustration: '', title: 'Community', text: 'Take advantage of resources from the community. Users will be able to share their work with others.' },
          ]}
        />

        <Epilogue
          title="Accelerate your life!"
          subtitle1="Start making things with Obrew today"
          subtitle2="Get notified of product updates"
          illustration=""
        >
          <SubscribeInput
            placeholder="your@email.com"
            onAction={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            // link=""
            actionText="Subscribe"
          />
        </Epilogue>
      </main>

      <Footer
        title={`🍺 ${data.product}`}
      />
    </div >
  )
}
