export default effects => store => next => async (action) => {
  next(action);
  const key = Object.keys(effects).find((i) => {
    return i === action.type;
  });
  if (key) {
    await effects[key](action, store);
  }
};
