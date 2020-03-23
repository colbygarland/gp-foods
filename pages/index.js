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
                          <p>DISCLAIMER: I am not affiliated with anybody, I just want to help. I am also staying home and social distancing, which you should too.</p>
                          <p>Add a restaurant or update an existing one here: <a href={"https://forms.gle/D2rWrRuF1ZYLgDMp8"} target={"_blank"} class={"btn btn-primary"}>Update Form</a></p>
                          <p>Tap on a restaurant to call them.</p>

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
