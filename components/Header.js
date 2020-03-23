import Head from "next/head";

const Header = () => (
    <div>
        <Head>
            <title>GP Foods</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500&display=swap" rel="stylesheet" />
        </Head>

        <header>
            <div className="container">
                <h1>Grande Prairie Foods</h1>
            </div>
        </header>
    </div>
);

export default Header
