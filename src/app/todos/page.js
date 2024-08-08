import Link from "next/link";
import styles from "./Todo.module.css"

// export const getStaticProps = (async (context) =>{
//         const data = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const todos = await data.json()
//     return{
//         props: {todos}
//     }
// }) 

const getData = async (para)=>{
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${para}`)
    const resp = data.json()
    return (resp)
 }
export default async function Todos({params}){
    const data = await getData(params.todoId);
    return(
        <>
            <h1>Tarefas para fazer</h1>
            <ul className={styles.todolist}>
                {data.map((todo)=>(
                    <li>{todo.title} <Link href={`/todos/${todo.id}`} legacyBehavior><a>Detalhes</a></Link></li>
                ))}
            </ul>
        </>
    )
}