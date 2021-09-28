import { Redirect, Route } from "react-router";
import { useAuth } from "../contexts/auth";

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const { signed } = useAuth();

    return (
        <Route {...rest} render={props => (
            signed ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/signIn', state: { from: props.location } }} />
            )
        )} />
    )
}
