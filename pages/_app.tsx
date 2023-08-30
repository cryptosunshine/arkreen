import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { NextRouter, useRouter } from 'next/router';
import Head from 'next/head'
import "styles/app.less";
import 'styles/leaflet.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { IntlProvider } from 'react-intl'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as localeTypes from '../locales/types';
import locales from '../locales'
import Layout from '@/components/layout'
import '@rainbow-me/rainbowkit/styles.css';
import 'styles/globals.css'
import { RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { metaMaskWallet, walletConnectWallet, injectedWallet } from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from 'wagmi/providers/public';


const projectId = '' + process.env.NEXT_PUBLIC_WALLET_CONNETC_PROJECT_ID;
const ALCHEMY_ID = process.env.NEXT_PUBLIC_ALCHEMY_ID || '';

const appInfo = {
  appName: "Arkreen Greenbtc",
  learnMoreUrl: "https://greenbtc.arkreen.work",
};

const { chains, publicClient } = configureChains(
    [process.env.NEXT_PUBLIC_CHAIN_NET=='production'?polygon:polygonMumbai],
    [alchemyProvider({ apiKey: ALCHEMY_ID }), publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: "Suggested",
    wallets: [
      metaMaskWallet({ projectId,chains }),
      walletConnectWallet({ projectId:projectId,chains:chains }),
      injectedWallet({ chains }),
    ],
  },
]);

const config = createConfig({ autoConnect: true, connectors, publicClient });

const App = ({ Component, pageProps }: AppProps) => {
  //
  const queryClient = new QueryClient()
  const router = useRouter();
  // 多语言配置
  const DefaultLocale = 'en';
  const { locale = DefaultLocale, defaultLocale, pathname }: NextRouter = router;
  const localeCopy: localeTypes.LocaleData = locales[locale];
  const messages = { ...localeCopy[pathname], ...localeCopy['share'] }

  useEffect(() => {
    //读取本地存储的主题
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.classList.add(theme);
    }

    const handleRouteChange = (url: any) => {
      if (window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
          page_path: url,
        })
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages}>
          <WagmiConfig config={config}>
            <RainbowKitProvider modalSize="compact" chains={chains} showRecentTransactions={true} appInfo={appInfo}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
              <ToastContainer />
            </RainbowKitProvider>
          </WagmiConfig>
        </IntlProvider>
      </QueryClientProvider>
    </>
  )
}

export default App

