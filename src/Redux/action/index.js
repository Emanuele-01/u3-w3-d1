import { useSelector } from "react-redux";

export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_QUERY = "SET_QUERY";
export const SET_JOBS = "SET_JOBS";


export const setMyFetch = () => {
    return async (dispatch, getState) => {
        const query = useSelector(state => state.query.content)
        const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='
try {
    const response = await fetch(baseEndpoint + query + "&limit=20");
    if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: SET_JOBS, payload: data });
    } else {
        alert("Error fetching results");
    }
} catch (error) {
    console.log(error);
}
    };
};
