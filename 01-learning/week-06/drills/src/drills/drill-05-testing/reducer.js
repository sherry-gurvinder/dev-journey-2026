const reducerfn = (state, action) => {
  if (action.type === 'Increment') return state + 1;
  if (action.type === 'Decrement') return state - 1;
  if (action.type === 'Reset') return 0;
};

module.exports = { reducerfn };