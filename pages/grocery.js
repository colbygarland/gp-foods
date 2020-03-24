import Layout from "../components/Layout";
import Places from "../components/Places";
import Container from "../components/Container";
import Content from "../components/Content";
import Legend from "../components/Legend";
import Column from "../components/Column";
import Row from "../components/Row";
import GroceryPlaces from "../components/GroceryPlaces";
import LegendItem from "../components/LegendItem";

const Grocery = () => (
    <Layout>
        <Container>
            <Content>
                <Row>
                    <Column md={4}>
                        <h1>Grocery</h1>
                        <div>
                            <LegendItem status={"success"}>Offers Delivery / Click n Collect</LegendItem>
                        </div>
                    </Column>
                    <Column md={8}>
                        <GroceryPlaces/>
                    </Column>
                </Row>
            </Content>
        </Container>
    </Layout>
);

export default Grocery
