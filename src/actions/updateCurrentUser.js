export const updateCurrentUser = (newData) => {
  return {
    type: 'UPDATE_CURRENT_USER_DATA',
    payload: newData
  }
}
