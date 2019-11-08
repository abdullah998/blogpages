import axios from 'axios'

export const search = () => {
  return async dispatch => {
    const response =
      await axios.get(' http://127.0.0.1:8000/api/myapi/posts4', {
        params:
        {
          search: document.getElementById('searchId').value
        },

      })
    dispatch({
      type: 'SEARCH',
      payload: { query: (response.data) }
    })

  }
}
