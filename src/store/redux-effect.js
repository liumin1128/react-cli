export default effects => store => next => async (action) => {
  next(action);
  if (typeof effects[action.type] === 'function') {
    return effects[action.type](action, store);
  }
};
