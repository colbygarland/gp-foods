import Layout from "../components/Layout";
import Places from "../components/Places";
import Container from "../components/Container";
import Content from "../components/Content";
import Legend from "../components/Legend";
import Column from "../components/Column";
import Row from "../components/Row";

const Restaurants = () => (
    <Layout>
        <Container>
            <Content>
                <Row>
                    <Column md={4}>
                        <h1>Restaurants</h1>
                        <p>Tap on a restaurant to call them.</p>
                        <Legend/>
                    </Column>
                    <Column md={8}>
                        <Places/>
                    </Column>
                </Row>
            </Content>
        </Container>
    </Layout>
);

export default Restaurants
