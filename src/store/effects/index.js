const test = async ({ query }, { getState, dispatch }) => {
  try {
    console.log(query);
    const store = await getState();
    console.log(store);
    await dispatch({ type: 'test/success' });
  } catch (error) {
    console.log(error);
  }
};

export default {
  test,
};
