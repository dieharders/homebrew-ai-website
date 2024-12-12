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
import data from '../global/global.json';
import { inter, geist_sans } from 'fonts/fonts';
import benefitPosterImageA from 'public/is-for.png';
import benefitPosterImageB from 'public/can-do.svg';
import benefitPosterImageC from 'public/what-is.svg';
import highlightPosterImageA from 'public/use-cases.svg';
import highlightPosterImageB from 'public/workflows.svg';
import highlightPosterImageC from 'public/highlight-model.png';
import epiloguePosterImage from 'public/badge.png';
import breakPosterImage from 'public/no-pay.svg';
import helperPosterImage from 'public/worker.svg';
import docsImage from 'public/icons/docs.png';
import oneclickPosterImage from 'public/cursor.svg';

export default function Home() {
  const imgStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  const benefitPosterAStyle = {
    backgroundImage: `url(${benefitPosterImageA.src})`,
    ...imgStyle,
    backgroundColor: 'transparent',
    backgroundSize: 'contain',
  }
  const benefitPosterBStyle = {
    backgroundImage: `url(${benefitPosterImageB.src})`,
    ...imgStyle,
    backgroundColor: 'transparent',
    backgroundSize: 'contain',
  }
  const benefitPosterCStyle = {
    backgroundImage: `url(${benefitPosterImageC.src})`,
    ...imgStyle,
    backgroundColor: 'transparent',
    backgroundSize: 'contain',
  }
  const highlightPosterA = {
    backgroundImage: `url(${highlightPosterImageA.src})`,
    ...imgStyle,
    minHeight: '24rem',
    backgroundColor: 'transparent',
    backgroundSize: 'contain',
  }
  const highlightPosterB = {
    backgroundImage: `url(${highlightPosterImageB.src})`,
    ...imgStyle,
    minHeight: '20rem',
    backgroundColor: 'transparent',
    backgroundSize: 'contain',
  }
  const highlightPosterC = {
    backgroundImage: `url(${highlightPosterImageC.src})`,
    ...imgStyle,
    minHeight: '20rem',
    backgroundColor: 'transparent',
    backgroundSize: 'contain',
  }
  const epiloguePoster = {
    backgroundImage: `url(${epiloguePosterImage.src})`,
    ...imgStyle,
    backgroundColor: 'transparent',
    backgroundSize: 'contain',
  }
  const breakPoster = {
    backgroundImage: `url(${breakPosterImage.src})`,
    ...imgStyle,
    backgroundColor: 'transparent',
    backgroundSize: 'contain',
  }
  const helperPoster = {
    backgroundImage: `url(${helperPosterImage.src})`,
    ...imgStyle,
    backgroundColor: 'transparent',
    backgroundSize: 'contain',
  }
  const oneclickPoster = {
    backgroundImage: `url(${oneclickPosterImage.src})`,
    ...imgStyle,
    backgroundColor: 'transparent',
    backgroundSize: 'contain',
  }
  const docsPoster = {
    backgroundImage: `url(${docsImage.src})`,
    ...imgStyle,
    backgroundColor: 'transparent',
    backgroundSize: 'contain',
  }

  return (
    <div className={`${geist_sans.className}`}>
      <Head>
        <title>Obrew - Free, private Ai for the masses</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.openbrewai.com" />
      </Head>

      <Notice id="subscribed">Thank you for subscribing!</Notice>
      <Header id="top" title={`${data.product}`} />

      <main>
        <Hero
          title={<h1 style={{ fontSize: '3rem' }}>Personal Ai</h1>}
          subtitle={data.subheadline}
          className={inter.className}
        ></Hero>

        <Break
          title="Stop paying API bills"
          subtitle="Ditch the subscriptions. Build and run Ai all day long for free!"
          location="highlight"
          background="accent-alt-2"
          // action="Download Now"
          illustration={breakPoster}
          onActionClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />

        <Benefits
          background="alternate"
          title={data.benefits.headline}
          subtitle={data.benefits.subheadline}
          benefits={[
            { illustration: benefitPosterAStyle, title: 'Who is this for?', text: 'Everyone. Engineers can customize. Power users get unlimited responses.' },
            { illustration: benefitPosterCStyle, title: 'What is it?', text: 'Obrew provides a range of intuitive tools that speeds up production of Ai apps.' },
            { illustration: benefitPosterBStyle, title: 'What can it do?', text: 'Generate text, images (coming soon), deploy agents or serve as a backend.' },
          ]}
        />

        <Break
          title="Tutorials"
          location="accent"
          background="accent-alt-1"
          subtitle="How-to's and helpful examples on our Youtube page."
          action="Browse resources"
          illustration={helperPoster}
          actionHref="http://www.youtube.com/@OpenBrewAi"
        />

        <Highlights
          title="The Ai Engine for Creators"
          subtitle="Obrew is an Ai meta-framework that provides tools for common problems like long term memory and hallucinations."
          highlights={[
            { illustration: highlightPosterA, title: 'Use cases', text: 'Domain knowledge co-pilots, customer service chatbot, compliance assistants, document extraction, and advanced search.' },
            { illustration: highlightPosterB, title: 'Build workflows with natural language', text: "Obrew gives you the ability to build advanced systems to automate your tasks. It's as easy as writing a todo list." },
            { illustration: highlightPosterC, title: 'Download Ai models', text: 'Easily search from thousands of open-source models, view their features and download to your device.' },
          ]}
        />

        <Break
          title="Easy to use"
          subtitle="Check out the docs to discover what you can do."
          action="Read Docs"
          location="highlight"
          background="accent-alt-2"
          illustration={docsPoster}
          actionHref="https://github.com/dieharders/ai-text-server"
        />

        <Features
          background="alternate"
          title="Features"
          subtitle="Smart tools for every job."
          features={[
            { icon: '/icons/truck.png', title: 'Easy Install', text: 'All-in-one app. No need for additional software.' },
            { icon: '/icons/robot-arm.png', title: 'Run Any Model', text: 'Download any quantized model. Supports CPU/GPU.' },
            { icon: '/icons/off-limits.png', title: 'No Limits', text: 'Work without boundaries. No daily limits or throttling.' },
            { icon: '/icons/toolbox.png', title: 'Moddable', text: 'Designed to be hacked. Write or add your own custom tools.' },
            { icon: '/icons/lock.png', title: 'Data Privacy', text: 'Everything stays on device. Prevent exposure and leaks.' },
            { icon: '/icons/face-censored.png', title: 'Unrestricted', text: 'Get objective answers to requests, uncensored.' },
            { icon: '/icons/robot-face.png', title: 'Agents', text: 'Build Ai to perform tasks on your behalf in the real world.' },
            { icon: '/icons/clipboard.png', title: 'Workflows', text: 'Write tasks in natural language and automate them.' },
            { icon: '/icons/key.png', title: 'API Access', text: 'We provide an extensive api for all your needs.' },
            // { icon: '👨‍👩‍👧‍👧', title: 'Community resources', text: 'Users can share their workflows, bots, tools with others.' },
          ]}
        />

        <Break
          title="One-click installer"
          subtitle="Everything you need in one app. Get setup fast."
          action="Download Now"
          illustration={oneclickPoster}
          onActionClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />

        <Epilogue
          title=""
          subtitle1=""
          subtitle2="Get notified of product updates"
          illustration={epiloguePoster}
        >
          <SubscribeInput
            placeholder="your@email.com"
            actionText="Subscribe"
          />
        </Epilogue>
      </main>

      <Footer
        title={`${data.product}`}
      />
    </div >
  )
}
