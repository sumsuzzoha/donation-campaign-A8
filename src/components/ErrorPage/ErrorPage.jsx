import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1 className="text-red-500 text-4xl font-bold mt-12	">Oops!</h1>
            <p className="text-red-500 text-4xl mt-4" >
                {error.status == "404" ? "404 Page Not Found" : ""}
            </p>
            {/* <p>Sorry, an unexpected error has occurred.</p> */}
            <br />
            <Link to="/" className="text-2xl ">Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;