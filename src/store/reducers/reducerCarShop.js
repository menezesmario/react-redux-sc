const ESTADO_INICIAL = {
    stack: [{}],
    feed: [
      {
        id: 1,
        cor: "React Avançado",
        tamanho: "M",
        preco: "48,00",
      },
      {
        id: 2,
        cor: "Node JS",
        tamanho: "G",
        preco: "50,00",
      },
      {
        id: 3,
        cor: "Ruby",
        tamanho: "P",
        preco: "68,00",
      },
    ],
  };
  
  export default function stacks(state = ESTADO_INICIAL, action) {
    if (action.type === "ADICIONAR_CARRINHO") {
      return {
        ...state,
        stack: action.stacks,
      };
    }
    return state;
  }