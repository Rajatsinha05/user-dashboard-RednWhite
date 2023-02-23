import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


function PrivateRoute({children}) {


    const data = useSelector((store) => store.data);

if(data.lenght>0){



    return children
}

return <Navigate to="/" />
}

export default PrivateRoute;
