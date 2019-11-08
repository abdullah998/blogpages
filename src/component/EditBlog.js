import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'


class EditBlog extends React.Component {
    /**
     * This component is used to edit a blog 
     */
    state = { items: {} }
    componentDidMount() {
        axios.get(' http://127.0.0.1:8000/api/myapi/posts2', {
            params:
            {
                id: this.props.id
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

                </div>
                <div>
                    <form action="http://127.0.0.1:8000/api/myapi/posts2" method="post" id='usrform'>
                        <input type="text" name="id" value={this.props.id} />
                        <h3>Title</h3>
                        <textarea name="title" form="usrform" placeholder={this.state.items.title}></textarea><br />
                        <h3>Post</h3>
                        <textarea name="post" form="usrform" rows='30' cols='90' placeholder={this.state.items.post}></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default EditBlog

