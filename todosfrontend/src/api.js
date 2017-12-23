const APIURL = '/api/todos/';

export async function getTodos() {
  return fetch(APIURL)
  .then(res => {
    if(!res.ok) {
      if(res.status >= 400 && res.status <= 500) {
        return res.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Server is not responding'};
        throw err;
      }
    }
    return res.json()
  })
}

export async function createTodo(val) {
  return fetch(APIURL, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({name: val})
  })
  .then(res => {
    if(!res.ok) {
      if(res.status >= 400 && res.status <= 500) {
        return res.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Server is not responding'};
        throw err;
      }
    }
    return res.json()
  })
}

export async function removeTodo(id) {
  fetch(APIURL + id, {
    method: 'delete',
  })
  .then(res => {
    if(!res.ok) {
      if(res.status >= 400 && res.status <= 500) {
        return res.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Server is not responding'};
        throw err;
      }
    }
  })
}

export async function toggleTodo(todo) {
  return fetch(APIURL + todo._id, {
    method: 'put',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({completed: !todo.completed})
  })
  .then(res => {
    if(!res.ok) {
      if(res.status >= 400 && res.status <= 500) {
        return res.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Server is not responding'};
        throw err;
      }
    }
    return res.json();
  })
}
