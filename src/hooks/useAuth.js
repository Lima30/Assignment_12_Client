import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider"

// const useAuth = () => {
//     return useContext(AuthContext);
// }

// export default useAuth;
const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}
export default useAuth;