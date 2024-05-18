import { wrapper } from '../redux/store';
import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
);

export default wrapper.withRedux(MyApp);
