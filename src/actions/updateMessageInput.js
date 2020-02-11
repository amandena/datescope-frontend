export const updateMessageInput = (name, value) => {
  const formData = { name, value }
  return {
    type: 'UPDATE_MESSAGE_INPUT_FORM',
    formData
  }
}
