import React from 'react';
import { connect } from 'react-redux';
import BlogShow from './BlogShow';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Dashboard = (props) => {
  const Blogs  = props.Blogs;

  return (<React.Fragment>
    { Blogs ?
      Blogs.map(({Title,Blog})=>{
        return(
          <BlogShow title={Title} blog={Blog} key={Title}/>
        )
      }) : null
    }
    </React.Fragment>)
}

//mapping state to props

const mapStateToProps = (state) => { 
  console.log(state.firestore)
  return{
    Blogs:state.firestore.ordered.bloges
  }
}
export default compose(connect(mapStateToProps),firestoreConnect(
  [
    { collection: 'bloges' }, // <-- Question is about this line
  ]
))(Dashboard);
