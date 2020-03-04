const initialState = {
  email: '',
  password: '',
  name: '',
  age: '',
  sign: '',
  bio: '',
  gender: '',
  preference: '',
  location: '',
  instagram: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SIGNUP_FORM':
      return action.formData

    case 'RESET_SIGNUP_FORM':
      return initialState

    case 'SET_FORM_DATA_FOR_EDIT_USER':
      return action.userFormData

    case 'EDIT_USER':
      console.log("in edit user case, action is", action)
      return state

    default:
      return state
  }
}
