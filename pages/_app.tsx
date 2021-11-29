import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { Layout } from "@components";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import { ToastContainer } from "react-toastify";

function getLibrary(provider: any) {
    return new Web3Provider(provider);
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <ToastContainer position="bottom-right" theme="dark" />
        </Web3ReactProvider>
    );
}

export default MyApp;
