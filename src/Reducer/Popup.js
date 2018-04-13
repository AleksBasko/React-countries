export default ( popupState = false, action ) => {
  const { type } = action;

  if ( type == 'popupState' ) {
    return !popupState;
  }

  return popupState;
}
