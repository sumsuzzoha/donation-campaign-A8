import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div >
            <h1 className="text-red-500 text-4xl font-bold mt-12 text-center">Oops!</h1>
            <p className="text-red-500 text-4xl mt-4 text-center" >
                {error.status == "404" ? "404 Page Not Found" : ""}
            </p>
        
            <div className="text-center mt-8 bg-blue-200 w-56 mx-auto rounded-lg">
            <Link to="/" className="text-2xl">Go Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;