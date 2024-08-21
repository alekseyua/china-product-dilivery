import { createBrowserRouter } from 'react-router-dom';
import LayoutContainer from '../Pages/Layout/LayoutContainer';
import AboutContainer from '../Pages/About/AboutContainer';
import DeliveryServicesContainer from '../Pages/DeliveryServices/DeliveryServicesContainer';
import FulfilmentContainer from '../Pages/Fulfilment/FulfilmentContainer';
import OrderTailoringContainer from '../Pages/OrderTailoring/OrderTailoringContainer';
import PaymentToChinaContainer from '../Pages/PaymentToChina/PaymentToChinaContainer';
import RepurchaseOfGoodsContainer from '../Pages/RepurchaseOfGoods/RepurchaseOfGoodsContainer';
import MainContainer from '../Pages/Main/MainContainer';
const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutContainer />,
        children:[
            {
                path: '/',
                element: <MainContainer />
            },
            {
                path: '/about',
                element: <AboutContainer />
            },
            {
                path: '/delivery',
                element: <DeliveryServicesContainer />
            },
            {
                path: '/fullfilment',
                element: <FulfilmentContainer />
            },
            {
                path: '/ordertailoring',
                element: <OrderTailoringContainer />
            },
            {
                path: '/payment-to-china',
                element: <PaymentToChinaContainer />
            },
            {
                path: '/repurchase-of-goods',
                element: <RepurchaseOfGoodsContainer />
            },
        ]
    },
    {
        path: '/*',
        element: <>страница в разработке</>
    }
])

export default router;