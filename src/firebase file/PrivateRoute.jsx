
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { fireContext } from "./AuthContext";




const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(fireContext)


    if(loading){
      
        return <div className=" mt-10">

            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>

        </div>

    }

    if(user){

       return children

    }
 

    return <Navigate to='/login' ></Navigate>
};

export default PrivateRoute;