export default ( count = 0, action ) => {
  const { type } = action;
  if ( type == 'somth' ) {
    return count + 1;
  }

  return count;
}
