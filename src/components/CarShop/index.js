import React from "react";
import { connect } from "react-redux";
import { ComprarCurso } from "../../styles";

const CarShop = ({stack}) => {
  return (
    <ComprarCurso>
      <h3>Curso escolhido</h3>
      <strong>{stack.cor} {stack.preco}</strong>
    </ComprarCurso>
  );
};

export default connect((state) => ({
    stack: state.stacks.stack
}))(CarShop);