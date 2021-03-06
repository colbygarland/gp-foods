import Head from "next/head";
import MenuButton from "./MenuButton";
import Link from "next/link";

const Header = () => (
    <div>
        <Head>
            <title>GP Foods</title>
            <meta name="description" content="Grande Prairie Foods - What is still open during COVID-19?" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500&display=swap" rel="stylesheet" />


            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-161672208-1"></script>
            <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-161672208-1');`}} />

            <script data-ad-client="ca-pub-6415703262492824" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

        </Head>

        <header>
            <div className="container">
                <MenuButton/>
                <h1><Link href={'/'}><a>Grande Prairie Foods</a></Link></h1>
            </div>
        </header>
    </div>
);

export default Header
