import Head from "next/head";

const Header = () => (
    <div>
        <Head>
            <title>GP Foods</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500&display=swap" rel="stylesheet" />


            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-161672208-1"></script>
            <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-161672208-1');`}} />

        </Head>

        <header>
            <div className="container">
                <h1>Grande Prairie Foods</h1>
            </div>
        </header>
    </div>
);

export default Header
