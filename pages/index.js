import '../styles/main.scss';
import Content from "../components/Content";
import Row from "../components/Row";
import Container from "../components/Container";
import Column from "../components/Column";
import Layout from "../components/Layout";

const Home = () => (
  <div>
      <Layout>
          <Content>
              <Container>
                  <Row>
                      <Column>
                          <h4>What is GP Foods?</h4>
                          <p>In response to COVID-19, I thought having a website with all the places in GP still delivering food / pickup was a good idea.</p>
                          <p>DISCLAIMER: I am not affiliated with anybody, I just want to help. I am also staying home and social distancing, which you should too.</p>
                          <p>Use the menu in the top left to navigate to Restaurants, Grocery stores (and hopefully more soon)</p>
                      </Column>
                  </Row>

              </Container>
          </Content>

      </Layout>

  </div>
);

export default Home
