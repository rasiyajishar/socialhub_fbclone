export  function postsReducer(state, action) {
    switch (action.type) {
      case "POST_REQUEST":
        return { ...state, loading: true, error: "" };
      case "POST_SUCCESS":
        console.log("API Response Data:", action.payload);
        return {
          ...state,
          loading: false,
          posts: action.payload,
          error: ""
        };
      case "POST_ERROR":
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  }


  export  function profileReducer(state, action) {
    switch (action.type) {
      case "PROFILE_REQUEST":
        return { ...state, loading: true, error: "" };
      case "PROFILE_SUCCESS":
        console.log("API Response Data:", action.payload);
        return {
          ...state,
          loading: false,
          profile: action.payload,
          error: ""
        };
      case "PROFILE_ERROR":
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  }