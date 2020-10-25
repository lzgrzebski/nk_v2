import React from "react";  
import Head from "next/head";  
import { ApolloProvider } from "@apollo/react-hooks";  
import withData from "../utils/apollo";
import App from "next/app";
import ApolloClient from "apollo-client";
import { GlobalStyles } from '../globalStyles';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ToTopBtn } from "../components/ToTopBtn";

interface Props {
    apollo: ApolloClient<{}>;
}

class MyApp extends App<Props> {
    componentDidMount() {
        if(process.browser && document){
            document.addEventListener('contextmenu', event => event.preventDefault());
        }
    }
    render() {
        return (
            <ApolloProvider client={this.props.apollo}>
                <GlobalStyles />
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="theme-color" content="#FFFFFF" />
                    <meta property="og:image" content="https://krzywczyce.pl/photos/home/top.jpg" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,800|Source+Serif+Pro" rel="stylesheet" />
                    <meta name="robots" content="index,follow"/>
                    <meta name="googlebot" content="index,follow"/>
                    <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
                    <title>Krzywczyce</title>
                    <meta name="description" content="Krzywczyce to maleńka i  urokliwa wieś położona wśród Borów Dolnośląskich, obok rzeki Szprotawy. Chętnie odwiedzana przez ludzi poszukujących spokoju na łonie natury." />
                    <meta property="og:description" content="Krzywczyce to maleńka i  urokliwa wieś położona wśród Borów Dolnośląskich, obok rzeki Szprotawy. Chętnie odwiedzana przez ludzi poszukujących spokoju na łonie natury." />

                </Head>
                <main>
                    <Header />
                    <this.props.Component {...this.props.pageProps} />
                    <ToTopBtn offset={30} />
                    <Footer />
                </main>
                <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
                    <symbol id="fb-icon" viewBox="0 0 64 64">
                        <path d="M42.3 10.7h-6.4c-8 0-10.5 3.5-10.5 9.8v5H20V33h5.4v22.3H35V33h6.5l.9-7.5H35V21c0-2 .4-3 3.5-3h3.8v-7.3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"  strokeWidth="1"/>
                    </symbol>
                    <symbol id="yt-icon" viewBox="0 0 78 78">
                        <path d="M60.6 12.8H17.4C8.9 12.8 2 19.7 2 28.2v21.6c0 8.5 6.9 15.4 15.4 15.4h43.3c8.5 0 15.4-6.9 15.4-15.4V28.2c-.1-8.5-7-15.4-15.5-15.4zM50.2 40.1L30 49.7c-.5.3-1.2-.1-1.2-.7V29.1c0-.6.6-1 1.2-.7l20.2 10.3c.7.2.6 1.1 0 1.4z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </symbol>
                    <symbol id="chevron-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </symbol>    
                </svg>
            </ApolloProvider>            
        );
    }
}

export default withData(MyApp);

if (process.browser && 'serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
}