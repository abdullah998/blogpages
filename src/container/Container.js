import { connect } from 'react-redux'
import AllBlogs from '../component/AllBlogs'
import { search } from '../actions';


const mapStateToProps = (state) => {
   return {
      list: state.items//Change in properties will trigger change in state
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      getRequest: () => dispatch(search())//event is mapped to dispatch function
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllBlogs);