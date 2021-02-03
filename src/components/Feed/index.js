  
import React from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import * as CarrinhoAction from "../../store/actions/actions";

import { ComprarCurso } from '../../styles';

const Feed = ({ stacks, adicionarCarrinho }) => {
  return (
    <ComprarCurso>
      <h3>Escolha um Curso</h3>
      <ul>
        {stacks.map((item) => (
          <li key={item.id}>
            <div onClick={() => adicionarCarrinho(item)}>
            {item.cor} | {item.preco}
            </div>
          </li>
        ))}
      </ul>
    </ComprarCurso>
  );
};

const mapStateToProps = (state) => ({
  stacks: state.stacks.feed,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(CarrinhoAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Feed);