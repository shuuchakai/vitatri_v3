import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true; // Configurar axios para enviar cookies

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                await axios.get('/api/users/get'); // Endpoint que devuelve los datos del usuario si está autenticado
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuthentication();
    }, []);

    if (isLoading) {
        return <div>Cargando...</div>; // Renderizar un componente de carga mientras se verifica la autenticación
    }

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" /> // Redirigir al usuario a la página de inicio de sesión si no está autenticado
                )
            }
        />
    );
};

export default ProtectedRoute;