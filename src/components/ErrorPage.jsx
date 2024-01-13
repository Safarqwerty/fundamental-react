/* eslint-disable no-unused-vars */
import { useRouteError } from "react-router-dom";

function ErrorPage () {
    const error = useRouteError();

    return <div>Error Gess!!!{error}</div>
}

export default ErrorPage;