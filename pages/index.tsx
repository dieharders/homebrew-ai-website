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
import { inter, geist_sans } from 'fonts/fonts';
import benefitPosterImageA from 'public/data-on-device.png';
import benefitPosterImageB from 'public/small-tools.png';
import benefitPosterImageC from 'public/documents.png';
import highlightPosterImageA from 'public/document-chunks.png';
import highlightPosterImageB from 'public/build-tools.png';
import highlightPosterImageC from 'public/model-download.png';
import epiloguePosterImage from 'public/acceleration.png';
import breakPosterImage from 'public/nopay.jpg';
import Roadmap from '@/blocks/Roadmap';

export default function Home() {
  const downloadLink = "https://github.com/dieharders/ai-text-server/releases/latest/download/ObrewServer.WIN.Setup.exe"
  const imgStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  const benefitPosterAStyle = {
    backgroundImage: `url(${benefitPosterImageA.src})`,
    ...imgStyle,
  }
  const benefitPosterBStyle = {
    backgroundImage: `url(${benefitPosterImageB.src})`,
    ...imgStyle,
  }
  const benefitPosterCStyle = {
    backgroundImage: `url(${benefitPosterImageC.src})`,
    ...imgStyle,
  }
  const highlightPosterA = {
    backgroundImage: `url(${highlightPosterImageA.src})`,
    ...imgStyle,
  }
  const highlightPosterB = {
    backgroundImage: `url(${highlightPosterImageB.src})`,
    ...imgStyle,
  }
  const highlightPosterC = {
    backgroundImage: `url(${highlightPosterImageC.src})`,
    ...imgStyle,
  }
  const epiloguePoster = {
    backgroundImage: `url(${epiloguePosterImage.src})`,
    ...imgStyle,
  }
  const breakPoster = {
    backgroundImage: `url(${breakPosterImage.src})`,
    ...imgStyle,
    backgroundSize: 'contain',
  }

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
              href="https://github.com/dieharders/ai-text-server/releases"
              target="_blank"
            >
              Obrew Engine on Github</a> | Free & Open Source
          </p>
        </Hero>

        <Benefits
          background="alternate"
          title={data.benefits.headline}
          subtitle={data.benefits.subheadline}
          benefits={[
            { illustration: benefitPosterAStyle, title: 'Your data stays on device 💻', text: 'Everything you upload or type is stored on your device. Data stays private.' },
            { illustration: benefitPosterBStyle, title: 'Build your own tools 🧰', text: 'Stop waiting for new toys. Build your own bots easily with no code needed.' },
            { illustration: benefitPosterCStyle, title: 'Unlimited Ai for free 🌟', text: 'Have large workloads or just want to run Ai all day long? You can for free!' },
          ]}
        />

        <Break
          title="Stop paying API bills"
          subtitle="Ditch the subscriptions. Build and run Ai all day long for free!"
          action="Download Now"
          illustration={breakPoster}
          onActionClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />

        <Highlights
          title="The Ai Engine for makers"
          subtitle="Obrew is like a game engine for Ai tools. It has everything you need to build on top of."
          highlights={[
            { illustration: highlightPosterA, title: 'Have conversations with custom assistants', text: 'You can type, speak or even provide an image of your request. Bring together several Ai in a chat room and have them talk through a specific problem.' },
            { illustration: highlightPosterB, title: 'Build workflows with natural language', text: 'Obrew gives you the ability to build advanced systems that can automate your work or imitate behaviors. Building automated Ai agents is as easy as creating a todo list.' },
            { illustration: highlightPosterC, title: 'And much more...', text: 'Talk to your documents, brainstorm ideas, create art, build a web service, or launch your next startup.' },
          ]}
        />

        <Features
          background="alternate"
          title="Feature list"
          subtitle="Obrew is built to be moddable like a video game. Dont see a feature? Mod it yourself!"
          features={[
            { icon: '🤬', title: 'Unrestricted', text: 'Get answers to any request, uncensored. No more "Sorry, I cannot answer that".' },
            { icon: '🔍', title: 'Search & Discuss', text: 'Have a discussion with your data. Find what you need based on a description.' },
            { icon: '🚫', title: 'No limits or tracking', text: 'Create without limits. Your output wont be censored or trained on by third parties.' },
            { icon: '🤖', title: 'Agents', text: 'Easily build and deploy autonomous Ai that can perform tasks on your behalf.' },
            { icon: '✨', title: 'Workflows', text: 'Write tasks in natural language and automate things like research, etc.' },
            { icon: '👨‍👩‍👧‍👧', title: 'Community Resources', text: 'Users can share their workflows, bots, tools with others.' },
          ]}
        />

        <Roadmap
          background="normal"
          title="Roadmap"
          subtitle="This is a list of where we would like to be by the end of this year."
        >
          {
            [
              '✅ Run open source models locally for free',
              '✅ Download models from HuggingFace',
              '✅ Build custom bots (like GPT store)',
              '✅ Streaming Web UI interface',
              '✅ Chat with your documents (RAG)',
              '✅ Inspect & optimize document chunking for RAG',
              '✅ Save chat history locally',
              '✅ Build agents with access to tools',
              '❌ Create workflows and execute jobs',
              '❌ Source citations from chat responses',
              '❌ Import/Share configs, extensions, tools from community',
            ]
          }
        </Roadmap>

        <Epilogue
          title="Accelerate your life!"
          subtitle1="Start creating with Obrew today"
          subtitle2="Get notified of product updates"
          illustration={epiloguePoster}
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
