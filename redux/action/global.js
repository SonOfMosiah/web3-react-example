export const calculateBrowserSize = () => {
  return { type: 'CALCULATE_BROWSER_SIZE' }
}

export const setCurrentAccount = (currentAccount) => async dispatch => {
  dispatch({
    type: 'SET_CURRENT_ACCOUNT',
    payload: {
      currentAccount
    }
  })
}

export const openModal = (modal) => dispatch => {
  dispatch({
    type: 'OPEN_MODAL',
    payload: modal
  })
}

export const closeModal = () => dispatch => {
  dispatch({
    type: 'CLOSE_MODAL'
  })
}

export const updateProhibitedCountry = (country) => async dispatch => {
  dispatch({
    type: 'UPDATE_PROHIBITED_COUNTRY',
    payload: {
      country
    }
  })
}
