const initialState = {
  name: '',
  alamat: '',
  deposit: 0,
  money: 0
}

const reducer = ( state = initialState , action ) => {
  console.log(action, '<<< action in reducer')

  switch (action.type) {
    case 'register': 
      const newState = {
        ...state,
        name: action.payload?.name,
        alamat: action.payload?.alamat,
        deposit: action.payload?.deposit 
      }

      return newState;
    default :
      return state
  }
}

export default reducer