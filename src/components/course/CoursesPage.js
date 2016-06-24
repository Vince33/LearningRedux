import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';


class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    // debugger;
    // the line below is firing and not allowing for the courses page to render more than momentarily
    // when i commented this out it seems to work the course with corey house builds this with the line below not sure if some
    // has changed or i am doing something wrong
    // this.redirectToAddCoursePage = this.redirectToAddCoursePage(this);

  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }


  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
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
