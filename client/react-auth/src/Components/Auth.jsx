import { Navigate } from "react-router-dom";

const CheckAuth = ({children}) => {
    const token = localStorage.getItem('check')
    if(!token) {
        return <Navigate to={'/login'} replace={true}></Navigate>
    }
    return children;
}

export default CheckAuth