import React from "react";

import { connect } from "react-redux";

import { Curso, Section } from '../../styles';

const Video = ({ activeLesson, activeModule }) => {
  return (
   
    <Curso>
      <strong>{activeModule.title}</strong>
      <br />
      <span>{activeLesson.title}</span>
    </Curso>
    
    
  );
};

export default connect((state) => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);