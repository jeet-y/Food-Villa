import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="w-full full-height flex justify-center">
            <div className="w-3/4 xl:w-3/4 xl:px-16 2xl:w-2/3 px-8 full-height">
                <h2>Oops!</h2>
                <h3>Something went wrong</h3>
                <h6>{err.status + ": " + err.statusText}</h6>
            </div>
        </div>
    )
}

export default Error;