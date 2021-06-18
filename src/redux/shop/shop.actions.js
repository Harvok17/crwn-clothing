import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    try {
      const snapShot = await collectionRef.get();
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      dispatch(fetchCollectionSuccess(collectionsMap));
    } catch (error) {
      dispatch(fetchCollectionsFailure(error));
    }
  };
};

// collectionRef
//   .get()
//   .then((snapShot) => {
//     const collectionsMap = convertCollectionsSnapshotToMap(snapShot);

//     dispatch(fetchCollectionSuccess(collectionsMap));
//   })
//   .catch((error) => dispatch(fetchCollectionsFailure(error)));
