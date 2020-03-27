const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SIGNUP_FORM':
      return action.formData

    case 'RESET_SIGNUP_FORM':
      return initialState

    case 'SET_FORM_DATA_FOR_EDIT_USER':
      return action.userFormData

    default:
      return state
  }
}
