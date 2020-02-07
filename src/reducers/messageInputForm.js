const initialState = {
  comment: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE_INPUT_FORM':
      return {
        ...state,
        [action.formData.name]: action.formData.value
      }
    case 'RESET_MESSAGE_INPUT_FORM':
      return initialState
    default:
      return state
  }
}
