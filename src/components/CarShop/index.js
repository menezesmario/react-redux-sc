import React from "react";
import { connect } from "react-redux";

const CarShop = ({stack}) => {
  return (
    <div>
      <h1>Curso escolhido</h1>
      <strong>{stack.cor} {stack.preco}</strong>
    </div>
  );
};

export default connect((state) => ({
    stack: state.stacks.stack
}))(CarShop);