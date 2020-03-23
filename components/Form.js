const Form = () => (
    <form method="post" netlify>
        <div className={"form-group"}>
            <label>Restaurant</label>
            <input type={"text"} required name={"restaurant"} className={"form-control"}/>
        </div>
        <div className={"form-group"}>
            <label>Status</label>
            <select required name={"status"} className={"form-control"}>
                <option>Delivery / Pickup / Curbside</option>
                <option>Delivery Only</option>
                <option>Pickup Only</option>
                <option>Curbside Pickup Only</option>
                <option>Temporarily Closed</option>
            </select>
        </div>
        <div className={"form-group"}>
            <button type={"submit"} class={"btn btn-primary"}>Submit</button>
        </div>
    </form>
);

export default Form
