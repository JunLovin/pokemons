import { Link } from "react-router-dom";

function DefaultError() {
    return (
        <>
        <h1>Oh! Something is bad. Please refresh the page or click <Link to="/">Here</Link></h1>
        </>
    )
}

export default DefaultError;