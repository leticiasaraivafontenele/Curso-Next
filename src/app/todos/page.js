import styles from "./Todo.module.css"
import { InferGetStaticPropsType, GetStaticProps } from "next"



export const getStaticProps = (async (context) =>{
        const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await data.json()
    return{
        props: {todos}
    }
}) 

export default async function Todos({todos}){
    return(
        <>
            <h1>Tarefas para fazer</h1>
            <ul className={styles.todolist}>
                {todos.map((todo)=>{
                    <li>{todo.title}</li>
                })}
            </ul>
        </>
    )
}