import {
  ADD_ITEM_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  SOLD_ITEM_FAILURE,
  SOLD_ITEM_REQUEST,
  SOLD_ITEM_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const addItemRequest = () => ({
  type: ADD_ITEM_REQUEST,
});

export const addItemSuccess = (data) => ({
  type: ADD_ITEM_SUCCESS,
  payload: data,
});
export const addItemFailure = () => ({
  type: ADD_ITEM_FAILURE,
});

export const soldItemRequest = () => ({
  type: SOLD_ITEM_REQUEST,
});

export const soldItemSuccess = (data) => ({
  type: SOLD_ITEM_SUCCESS,
  payload: data,
});
export const soldItemFailure = () => ({
  type: SOLD_ITEM_FAILURE,
});

export const addItemToList = (payload) => (dispatch) => {
  console.log(payload, "ab");
  dispatch(addItemRequest());
  axios
    .post("https://simple-store-data.herokuapp.com/api/items", payload)
    .then((r) => {
      console.log(r.data);
      //dispatch(addItemSuccess(r.data));
      dispatch(getItemList());
    })
    .catch((e) => {
      console.log(e);
      dispatch(addItemFailure());
    });
};

export const getItemList = (payload) => (dispatch) => {
  dispatch(addItemRequest());
  axios
    .get("https://simple-store-data.herokuapp.com/api/items", payload)
    .then((r) => {
      console.log("homepage get data is ",r.data)
      dispatch(addItemSuccess(r.data));
    })
    .catch((e) => {
      // console.log(e) ;
      dispatch(addItemFailure());
    });
};

export const sellQtyFunction = (id, sellqty) => (dispatch) => {
  dispatch(soldItemRequest());
  console.log(id,sellqty)
  axios
    .patch(`https://simple-store-data.herokuapp.com/api/items/${id}`,sellqty)
    .then((r) => {
      // dispatch(soldItemSuccess(r.data))
      dispatch(getItemList());
    })
    .catch((e) => {
      console.log(e);
      dispatch(soldItemFailure());
    });
};

export const addQtyFunction = (id, addqty) => (dispatch) => {
  dispatch(addItemRequest());
  axios
    .patch(`https://simple-store-data.herokuapp.com/api/items/${id}`,addqty)
    .then((r) => {
     // console.log(addqty, "bbbbbbbbbbbbb");
      //    dispatch(soldItemSuccess(r.data))
      dispatch(getItemList());
    })
    .catch((e) => {
      console.log(e);
      //dispatch(addItemFailure())
    });
};

export const removeItemFunction = (id) => (dispatch) => {
  axios
    .delete(`https://simple-store-data.herokuapp.com/api/items/${id}`)
    .then((r) => {
      console.log("sunday")
      dispatch(getItemList());
    })
    .catch((e) => {
      console.log(e);
    });
};

// export const changeStatusFunction =(id,data)=>(dispatch)=>{

//     axios.patch(`https://simple-store-data.herokuapp.com/api/items/${id}`,data)
//     .then((r)=>{
//         dispatch(getItemList())
//     })
//     .catch((e)=>{
//         console.log(e)
//     })
// }

// export const getRadioFunction =(value)=>(dispatch)=>{
//     //views_gte=10&views_lte=20
//     console.log("abbbb")
//     axios.get(`https://simple-store-data.herokuapp.com/api/items/?qty_gte=100&qty_lte=200`)
//     .then((r)=>{
//         console.log(r.data)
//         dispatch(getItemList())
//     })
//     .catch((e)=>{
//         console.log(e)
//     })
// }
