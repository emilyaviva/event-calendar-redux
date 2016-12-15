const visibilityFilter = (state = { showOnlyFood: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_FOOD':
      return { showOnlyFood: !state.showOnlyFood }
    default:
      return state
  }
}

export default visibilityFilter
