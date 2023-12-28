import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export function PrivateRoute({ children }) {
  if (!localStorage.getItem('access-token')) {
    return <Navigate to="/" />;
  }
  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
