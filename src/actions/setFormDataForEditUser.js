export const setFormDataForEditUser = user => {
  const userFormData = {
    email: user.email,
    password: user.password,
    name: user.name,
    age: user.age,
    sign: user.sign,
    bio: user.bio,
    gender: user.gender,
    preference: user.preference,
    location: user.location,
    instagram: user.instagram
  }
  return {
    type: 'SET_FORM_DATA_FOR_EDIT_USER',
    userFormData
  }
}
