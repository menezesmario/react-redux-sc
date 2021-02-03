import styled from 'styled-components';


export const Container = styled.div`
     
    display: flexbox;
   
    
` 

export const Curso = styled.h1`
    background-color: #0D1117;
    padding: 30px;
    font-family: sans-serif;
    color: white;
    width: 70%;
    height: 600px;
    span {
        font-size: 14px;
    }
`

export const SidebarCurso = styled.h3`
    margin-right: 0;
    background-color: #563D7C;
    padding: 20px;
    width: 30%;
    height: 600px;
    ul {
        list-style-type: none;
    }

    strong {
        font-family: sans-serif;
        color: white;
    }
    span {
        cursor: pointer;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 200;
        font-size: 12px;
        color: white;
        text-decoration: none;
    }
` 
export const ComprarCurso = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    ul {
        list-style-type: none;
        padding: 20px;
    }
    li {
        padding: 20px
    }
`

