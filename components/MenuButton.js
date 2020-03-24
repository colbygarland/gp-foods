import Link from "next/link";

const MenuButton = () => (
    <div id="menuToggle">
        <input type="checkbox" id="MenuToggleCheckbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="restaurants">
                    <a>Restaurants</a>
                </Link>
            </li>
            <li>
                <Link href="grocery">
                    <a>Grocery Stores + Hours</a>
                </Link>
            </li>
            <li>
                <a href="https://forms.gle/D2rWrRuF1ZYLgDMp8" target={"_blank"}>Add Missing Place / Update</a>
            </li>
        </ul>
    </div>

);

export default MenuButton
