import { cartActions } from './cart-clice';
import { uiActions } from './ui-slice';

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      // const res = await fetch(
      //   'https://redux-http-bc782-default-rtdb.firebaseio.com/cartItems.json'
      // ); // HIS FIREBASE REALTIME DATABASE LINK

      const res = await fetch(
        'https://redux-http-8da87-default-rtdb.firebaseio.com/cartItems.json'
      ); // MY FIREBASE REALTIME DATABASE LINK
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      console.log(cartData);
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'Sending Request Failed',
          type: 'error',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: 'Sending Request To Database!',
        type: 'warning',
      })
    );
    const sendRequest = async () => {
      // Send state as Sending request

      // const res = await fetch(
      //   'https://redux-http-bc782-default-rtdb.firebaseio.com/cartItems.json',
      //   {
      //     method: 'PUT',
      //     body: JSON.stringify(cart),
      //   }
      // ); // HIS FIREBASE REALTIME DATABASE LINK

      const res = await fetch(
        'https://redux-http-8da87-default-rtdb.firebaseio.com/cartItems.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      ); // MY FIREBASE REALTIME DATABASE LINK

      const data = await res.json();

      // Send state as Request is successful
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'Request Sent Successfully!!',
          type: 'success',
        })
      );
      return data;
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'Sending Request Failed',
          type: 'error',
        })
      );
    }
  };
};
