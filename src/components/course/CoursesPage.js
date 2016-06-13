import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';


class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    


  }




  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }


  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    //below is a more automatic and terse way of dispatching actions dont forget to import bindActionCreators from redux to use this
    actions: bindActionCreators(courseActions,dispatch)
    //below is the manual dispatch
    // createCourse: course => dispatch(courseActions.createCourse(course))
  };

}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
