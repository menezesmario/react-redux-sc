import React from "react";

import { connect } from "react-redux";

import { Curso } from '../../styles';

const Video = ({ activeLesson, activeModule }) => {
  return (
    <Curso>
      <strong>Módulo: {activeModule.title}</strong>
      <br />
      <span>Aula: {activeLesson.title}</span>
    </Curso>
    
  );
};

export default connect((state) => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);