export const deleteCurrentUserMessage = (message) => {
  return {
    type: 'DELETE_CURRENT_USER_MESSAGE',
    payload: message
  }
}
