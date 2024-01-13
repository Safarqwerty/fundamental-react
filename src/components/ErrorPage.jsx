/* eslint-disable no-unused-vars */
import { useRouteError } from "react-router-dom";

function ErrorPage () {
    const error = useRouteError();

    return <div>Error Gess!!!</div>
}

export default ErrorPage;