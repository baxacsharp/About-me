const initialState = {
  contact: {},
  loading: true,
  error: false,
}

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTACT":
      return {
        ...state,
        contact: action.payload,
      }
    case "RESET_CONTACT":
      return {
        ...state,
        contact: {},
      }
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      }
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default contactReducer
