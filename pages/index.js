import '../styles/main.scss';
import Content from "../components/Content";
import Row from "../components/Row";
import Container from "../components/Container";
import Places from "../components/Places";
import Column from "../components/Column";
import Legend from "../components/Legend";
import Layout from "../components/Layout";
import Form from "../components/Form";

const Home = () => (
  <div>

      <Layout>
          <Content>
              <Container>
                  <Row>
                      <Column md={6}>
                          <h4>What is GP Foods?</h4>
                          <p>In response to COVID-19, I thought having a website with all the places in GP still delivering food / pickup was a good idea.</p>
                          <p>Tap on a restaurant to call them.</p>
                          <p><a href={"#form"}>Click here to submit a change.</a></p>
                          <Legend/>
                      </Column>
                      <Column md={6}>
                          <Places/>
                      </Column>
                  </Row>

              </Container>
          </Content>
          <Content>
              <Container>
                  <h4 id={"form"}>What Am I Missing? What has changed?</h4>
                  <Form/>
              </Container>
          </Content>
      </Layout>

  </div>
);

export default Home
