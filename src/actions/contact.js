import axios from "axios"
const endpoint = process.env.REACT_APP_BACKEND_URL

const contactUs = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: "SET_LOADING",
        payload: true,
      })
      const response = await axios.post(endpoint + "/contact", { ...data })
      if (response) {
        dispatch({ type: "SET_CONTACT", payload: response.data })
        window.location.assign("http://localhost:3000/")
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: "SET_LOADING",
        payload: false,
      })
      dispatch({
        type: "SET_ERROR",
        payload: true,
      })
    }
  }
}
export default { contactUs }
