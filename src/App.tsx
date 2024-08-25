import {BrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom';
import router from './routers/routers';
import { WithIconAwesome } from './HOC/IconsFontAwesome/WithIconAwesome';

console.log({router})

function App() {
  return (
    // <RouterProvider router={router} />
    <BrowserRouter basename={router.basename}>
      <Routes>
        {
          router.routes.map((route: any) => {
            console.log({ route })
            return (
              <Route key={route.id} path={route.path} element={route.element}>
                {
                  route.children && route.children.map ( (routeChild: any)=> {
                    return(
                      <Route key={routeChild.id} path={routeChild.path} element={routeChild.element} />
                    )
                  })
                }
              </Route>
            )
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default WithIconAwesome(App);
