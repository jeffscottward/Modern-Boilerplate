function userReducer(state, action) {
  switch (action.type) {
    case "SOME_ACTION_DISPATCH":
      // Do something with action.payload
      return { ...state };
    default:
      return { ...state };
  }
}

function dateReducer(state, action) {
  switch (action.type) {
    case "SET_DATE_LOADED":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}

export default function mainReducer ({ user, date }, action) {
  // middleware goes here, i.e calling analytics service, etc.
  console.log(action)
  return {
    user: userReducer(user, action),
    date: dateReducer(date, action)
  }
}