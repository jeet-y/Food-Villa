import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(`ERROR MSG : `, err)
    return (
        <div>
            <h2>Oops!</h2>
            <h3>Something went wrong</h3>
            <h6>{err.status + ": " + err.statusText}</h6>
        </div>
    )
}

export default Error;