import Head from 'next/head';
import '../styles/main.scss';
import Content from "../compontents/Content";
import Row from "../compontents/Row";
import Container from "../compontents/Container";
import LegendItem from "../compontents/LegendItem";
import Places from "../compontents/Places";
import Column from "../compontents/Column";
import Legend from "../compontents/Legend";

const Home = () => (
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

      <main>
          <Content>
              <Container>
                  <Row>
                    <Column md={6}>
                        <h4>What is GP Foods?</h4>
                        <p>In response to COVID-19, I thought having a website with all the places in GP still delivering food / pickup was a good idea.</p>
                        <Legend/>
                    </Column>
                      <Column md={6}>
                          <Places/>
                      </Column>
                  </Row>

              </Container>
          </Content>

      </main>

  </div>
);

export default Home
