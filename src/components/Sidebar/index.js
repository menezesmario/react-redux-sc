import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CourseActions from "../../store/actions/actions";

import { SidebarCurso } from '../../styles';

const Sidebar = ({ modules, toggleLesson }) => {
  return (
    <SidebarCurso>
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>
                <span onClick={() => toggleLesson(module, lesson)}>
                {lesson.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </SidebarCurso>
  );
};

const mapStateToProps = (state) => ({
  modules: state.course.modules,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);