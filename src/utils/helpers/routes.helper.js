import { Route } from 'react-router-dom';
import ProtectedRoute from '../../ProtectedRoute';

export const generateRoutes = routeConfig => {
  const routes = [];
  if (!routeConfig) return [];

  routeConfig.forEach(item => {
    const routeProps = {
      element: item.isProtected ? (
        <ProtectedRoute>{item.component}</ProtectedRoute>
      ) : (
        item.component
      ),
      path: item.path,
    };

    const route = (
      <Route key={item.path} {...routeProps}>
        {item.children &&
          item.children.length > 0 &&
          generateRoutes(item.children)}
      </Route>
    );

    routes.push(route);
  });

  return routes;
};
