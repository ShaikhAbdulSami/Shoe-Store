export default (state, action) => {
    switch (action.type) {
      case "ADD_EXISTING_PRODUCT":
        return {
          ...state,
          totalAmount: action.total,
        }
      case "ADD_PRODUCT":
        return {
          ...state,
          cartData: action.data,
          totalAmount: action.total,
        }
      case "REMOVE_PRODUCT":
        return {
          ...state,
          cartData: action.data,
          totalAmount: action.total,
        }
      case "ADD_QUANTITY_1":
        return {
          ...state,
          totalAmount: action.total,
        }
      case "SUBTRACT_QUANTITY":
        return {
          ...state,
          totalAmount: action.total,
        }
      case "EMPTY_CART":
        return {
          ...state,
          cartData: action.data,
          totalAmount: action.total,
        }
      default:
        return {
          ...state,
        }
    }
  }