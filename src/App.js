import React from 'react'//
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from '../src/reducer/index'
import { BrowserRouter, Route, useParams } from 'react-router-dom'
import AllBlogs from './container/Container';
import ViewBlog from './component/ViewBlog';
import EditBlog from './component/EditBlog';
import {Link} from 'react-router-dom'



const store = createStore(
  reducer,
  { //initial state
    items: []
  },
  applyMiddleware(thunk)  //middleware for asynchronous actions
)

const Page1 = () => {
  /**
   * This page is the home page
   */
  return (
    <Provider store={store}>
      <div className='App'><AllBlogs /></div>
    </Provider>
  );
}
const Page2 = () => {
  /**
   * This is used to store a new blog
   */
  return (
    <div className='App'><h3></h3>
      <div>
        <Link to={"/"}><h1>Home</h1></Link>
        <Link to={"/NewBlog"}><h1>New Blog</h1></Link>
      </div>
      <form action="http://127.0.0.1:8000/api/myapi/posts/" method="post" id='usrform'>
        <h3>Title</h3>
        <textarea name="title" form="usrform">Enter here</textarea><br />
        <h3>Post</h3>
        <textarea name="post" form="usrform" rows='30' cols='90'>Enter here</textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

const Page3 = () => {
  /**
   * This is used to edit a blog
   */
  let { ID } = useParams()
  return (
    <div className='App'><EditBlog id={ID} /></div>
  );
}

const Page4 = () => {
  /**
   * This page is for viewing a blog
   */
  let { ID } = useParams()
  console.log(ID)
  return (
    <div className='App'><ViewBlog id={ID} /></div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route
            path='/' exact component={Page1}>
          </Route>
          <Route
            path='/NewBlog' exact component={Page2}>
          </Route>
          <Route
            path='/EditBlog/:ID' exact component={Page3}>
          </Route>
          <Route
            path='/ViewBlog/:ID' exact component={Page4}>
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;