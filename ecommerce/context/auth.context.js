import authService from "../services/auth.service";
import { createContext, useContext, useEffect, useState } from "react";

const Context  = createContext();

export function AuthProvider(props){
    const [isAuth, setIsAuth] = useState(false);

    useEffect(()=> {
        const token = localStorage.getItem("token")
        if (token) {
            setIsAuth(true);
            authService.setTokenApi(token);
        }
    }, []);

    return ( <Context.Provider value={[isAuth, setIsAuth]}>
        {props.children}
    </Context.Provider>
    );
}

export function useAuthContext() {
    return useContext(Context);
}