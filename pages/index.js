import '../styles/main.scss';
import Content from "../components/Content";
import Row from "../components/Row";
import Container from "../components/Container";
import Places from "../components/Places";
import Column from "../components/Column";
import Legend from "../components/Legend";
import Layout from "../components/Layout";

const Home = () => (
  <div>

      <Layout>
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
      </Layout>

  </div>
);

export default Home
