import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'








class ViewBlog extends React.Component {
   /**
    * This component displays a full blog
    */
   state={items:{}}
   componentDidMount() {
        axios.get(' http://127.0.0.1:8000/api/myapi/posts2', { params: 
        {
           id:this.props.id
        },

      })
.then(res => {
               this.setState({ items: res.data });
          })
            .catch(function (error) {
               console.log(error);
            });

   }

   render() {
      return (
         
         <div className="App">
            <div>
                  <Link to={"/"}><h1>Home</h1></Link>
                  <Link to={"/NewBlog"}><h1>New Blog</h1></Link>
                  <Link to={"/EditBlog/"+this.props.id}><h1>Edit Blog</h1></Link>
               </div>
            <div>
               <h4>Title</h4>
               <h5>{this.state.items.title}</h5>
               <p>{this.state.items.post}</p>
            </div>
         </div>
      );
   }
}

export default ViewBlog

