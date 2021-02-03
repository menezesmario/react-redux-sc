  
export function toggleLesson(module, lesson) {
    return {
      type: "TOGGLE_LESSON",
      module,
      lesson,
    };
  }
  
  export function adicionarCarrinho(stacks) {
    return {
      type: "ADICIONAR_CARRINHO",
      stacks,
    };
  }
