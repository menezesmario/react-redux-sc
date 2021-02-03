const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
      {
        id: 1,
        title: "Iniciando com React",
        lessons: [
          { id: 1, title: "Aula 1" },
          { id: 2, title: "Aula 2" },
          { id: 3, title: "Aula 3" },
        ],
      },
      {
        id: 2,
        title: "Aprendendo Redux",
        lessons: [
          { id: 4, title: "Aula 4" },
          { id: 5, title: "Aula 5" },
        ],
      },
    ],
  };
  
  export default function course(state = INITIAL_STATE, action) {
    if (action.type === "TOGGLE_LESSON") {
      return {
        ...state,
        activeLesson: action.lesson,
        activeModule: action.module,
      };
    }
    return state;
  }