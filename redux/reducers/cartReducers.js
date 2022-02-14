let defaultState = {
  selecteditems: {items: []},
};
let cartReducer = (state = defaultState, action) => {
  let newState = {...state};
  switch (action.type) {
    case 'ADD_TO_CART': {
      newState.selecteditems = {
        items: [...newState.selecteditems.items, action.payload],
      };
      console.log(JSON.stringify(newState));
      return newState;
    }
    case 'REMOVE_FROM_CART': {
      newState.selecteditems = {
        items: [
          ...newState.selecteditems.items.filter(
            item => item.name != action.payload.name,
          ),
        ],
      };
      console.log(JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;
