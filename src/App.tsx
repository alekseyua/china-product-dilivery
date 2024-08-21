import {RouterProvider} from 'react-router-dom';
import router from './routers/routers';
import { WithIconAwesome } from './HOC/IconsFontAwesome/WithIconAwesome';



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default WithIconAwesome(App);
