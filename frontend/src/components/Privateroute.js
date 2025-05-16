import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
// This component checks if a token exists in localStorage. If it does, it renders the children components (protected route). If not, it redirects to the login page.