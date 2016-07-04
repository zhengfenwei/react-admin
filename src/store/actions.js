export const SELECT_PATH = 'SELECT_PATH'
export function select_path(path) {
  return {
    type: SELECT_PATH,
    payload: { path }
  }
}

export const REQUEST_TABLE = 'TABLE_REQUEST'
export function requestTable(path) {
  return {
    type: REQUEST_TABLE,
    meta: { path }
  }
}

export const RECEIVE_TABLE = 'RECEIVE_TABLE'
export function receiveTable(path, { items, totalPage }) {
  return {
    type: RECEIVE_TABLE,
    payload: { items, totalPage },
    meta: { path }
  }
}

let root = 'http://jsonplaceholder.typicode.com'

//TODO handler server error
function fetchTable(path) {
  return (dispatch, getState) => {
    dispatch(requestTable(path))
    return $.ajax({
      url: `${root}/${path}`,
      data: {
        // _start: state.table.pageIndex * state.table.pageSize,
        _limit: 20
      }
    }).then(items => {
      dispatch(receiveTable(path, {
        items,
        totalPage: 10
      }))
    })
  }
}

export function fetchTableIfNeed(path) {
  return fetchTable(path)
}
