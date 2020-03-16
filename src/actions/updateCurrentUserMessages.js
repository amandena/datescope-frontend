export const updateCurrentUserMessages = (newData) => {
  return {
    type: 'UPDATE_CURRENT_USER_MESSAGES_DATA',
    payload: newData
  }
}
