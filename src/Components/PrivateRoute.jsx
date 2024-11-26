import { /*useDispatch,*/ useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
//import { logout } from "../store/actions/authAction";

function PrivateRoute({ children }) {
    const token = useSelector((state) => state.authReducer?.token)
    //const dispatch = useDispatch()
    const isAuthenticated = !!token && token !== "expired"

    if (!isAuthenticated) {
        //dispatch(logout())
        return <Navigate to="/sign-in" replace />
    }
    return children
}

export default PrivateRoute

