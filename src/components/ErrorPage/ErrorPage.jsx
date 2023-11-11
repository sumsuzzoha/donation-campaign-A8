import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <br />
            <Link to="/">Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;