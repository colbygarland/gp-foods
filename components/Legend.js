import LegendItem from "./LegendItem";

const Legend = (props) => (
    <div>
        <LegendItem status={"danger"}>Temporarily Closed</LegendItem>
        <LegendItem status={"primary"}>Delivery / Pickup / Curbside</LegendItem>
        <LegendItem status={"warning"}>Delivery Only</LegendItem>
        <LegendItem status={"success"}>Pickup Only</LegendItem>
        <LegendItem status={"info"}>Curbside Pickup Only</LegendItem>
    </div>
);

export default Legend
