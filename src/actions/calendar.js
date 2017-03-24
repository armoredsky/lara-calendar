export const types = {
  UPDATE_SELECTED_DATE: "UPDATE_SELECTED_DATE",
  UPDATE_WORKED: "UPDATE_WORKED",
  UPDATE_EARNED: "UPDATE_EARNED",
};

export const incrementMonth = () => {
  return dispatch => dispatch({type: types.UPDATE_SELECTED_DATE, value: 1, increment: 'month'});
};

export const decrementMonth = () => {
  return dispatch => dispatch({type: types.UPDATE_SELECTED_DATE, value: -1, increment: 'month'});
};

export const incrementYear = () => {
    return dispatch => dispatch({type: types.UPDATE_SELECTED_DATE, value: 1, increment: 'year'});
};

export const decrementYear = () => {
  return dispatch => dispatch({type: types.UPDATE_SELECTED_DATE, value: -1, increment: 'year'});
};

export const updateWorked = (worked, date) => {
  return dispatch => dispatch({
    type: types.UPDATE_WORKED,
    date,
    worked,
  })
}

export const updateEarned = (earned, date) => {
  return dispatch => dispatch({
    type: types.UPDATE_EARNED,
    date,
    earned,
  })
}
