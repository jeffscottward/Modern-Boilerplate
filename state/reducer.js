export default function reducer(state, action) {
  switch (action.type) {
    case "SOME_ACTION_DISPATCH":
      // Do something with action.payload
      return { ...state };
    default:
      return { ...state };
  }
}
