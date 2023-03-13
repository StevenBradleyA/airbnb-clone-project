import { csrfFetch } from "./csrf";

const GET_SPOTS = "spots/GET_SPOTS";

const getSpots = (allSpotData) => ({
  type: GET_SPOTS,
  payload: allSpotData,
});

export const getAllSpotsThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/spots");

  if (response.ok) {
    const allSpotData = await response.json();
    const allSpotDataObj = {};
    allSpotData.Spots.forEach((e) => {
      allSpotDataObj[e.id] = e;
    });

    dispatch(getSpots(allSpotDataObj));
  }
};

export const getSpotByIdThunk = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`);

  if (response.ok) {
    const allSpotData = await response.json();
    const allSpotDataObj = {};
    allSpotData[allSpotData.id] = allSpotData;

    dispatch(getSpots(allSpotDataObj));
  }
};

const initialState = {};

const spotsReducer = (state = initialState, action) => {
  // let newState = { ...state };
  switch (action.type) {
    case GET_SPOTS:
      let newState = { ...state, ...action.payload };
      return newState;
    default:
      return state;
  }
};

export default spotsReducer;
