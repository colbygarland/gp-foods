import ListItem from "./ListItem";
import List from "./List";

// warning for delivery
// success for takeout/curbside
const Places = () => (
    <List>
        <ListItem
            status={'warning'}
            name={"Card's Board Game Cafe"}
            phone={'780-123-4567'}
        />
    </List>
);

export default Places
