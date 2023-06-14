import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <p>404 - Page not found</p>
      <h1>Oops!</h1>
      <Link to={ROUTES.home}>Back to main</Link>
    </>
  );
};

export default NotFoundPage;
