import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Default" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>{title} | PixeDuck</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="PixeDUCK is a collection of unique Duck Skin NFTs, living on Ethereum blockchain."
      />
      <meta property="og:title" content={`${title} | Themeptation`} />
      <meta
        property="og:description"
        content="PixeDUCK is a collection of unique Duck Skin NFTs, living on Ethereum blockchain."
      />
      <meta property="og:url" content="https://www.pixeduck.com" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
