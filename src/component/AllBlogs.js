import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

function generateHTMLOutput(response) {
   /**
    * This function converts data of cities into a list 
    */
   var table = []
   if (response == undefined) {
      return table
   }
   for (let interval = response.length - 1; interval > -1; interval--) {
      let children = []
      children.push(<Blog data={((response[interval]))} />)
      table.push(<div>{children}</div>);
   }
   return table;
}


class Blog extends React.Component {
   /**
    * THis component displays a single blog.
    * 
    */
   render() {
      return (<div>
         <div>
            <h3>Title</h3>
            <Link to={"/ViewBlog/" + this.props.data.id}><h3><p>{this.props.data.title}</p></h3></Link>
            <h3>id</h3>
            <p>{this.props.data.id}</p>
            <h3>Edited on</h3>
            <p>{this.props.data.edited_on}</p>
            <h3>Created on</h3>
            <p>{this.props.data.created_on}</p>
         </div>
      </div>)
   }
}
var a = true
var abc
class AllBlogs extends Component {
   /**
    * This component displays a list of blogs 
    */
   state = { items: {} }
   componentDidMount() {
      if (a) {
         axios.get(' http://127.0.0.1:8000/api/myapi/posts', {
         })
            .then(res => {
               const persons = JSON.stringify(res.data);
               abc = JSON.parse(persons)
               this.setState({ items: abc });
               a = false
            })
            .catch(function (error) {
               console.log(error);
            });
      }

   }

   render() {
      const { list, getRequest } = this.props;
      if (a) {
         return (<div className="App">
            <div>
               <div>
                  <Link to={"/"}><h1>Home</h1></Link><Link to={"/NewBlog"}><h1>NewBlog</h1></Link>
               </div>
               <input type="text" id="searchId" /><br />
               <button id='searchId' onClick={getRequest}>Get Results</button>
               {generateHTMLOutput(abc)}
            </div>
         </div>)
      }
      return (

         <div className="App">
            <div>
               <input type="text" id="searchId" /><br />
               <button id='searchId' onClick={getRequest}>Get Results</button>
               {generateHTMLOutput(list[0])}
            </div>
         </div>
      );
   }
}
export default AllBlogs;