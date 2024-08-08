import Link from "next/link"
import getTodo from "@/utils/getTodo"
// export async function getStaticProps(context) {
//     const { params } = context

//     const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)
//     const todo = await data.json()

//     return{
//         props: { todo },
//     }
// }
// export async function getStaticPaths() {
//     const resp = await fetch(`https://jsonplaceholder.typicode.com/todos`)
//     const data = await resp.json()
//     const paths = data.map((todo)=>{
//         return{
//             paramns: {
//                 todoId: `${todo.id}`
//             }
//         }
//     })
//     return{paths, fallback: false}
    
// }


export default async function Todo({params}){

    const data =  await getTodo(params.todoId)

    return(
        <>
        <Link legacyBehavior href="/todos/"><a>Voltar</a></Link>
        <h1>A fazer: {data.id}</h1>
        <h3>Texto: {data.title}</h3>
        <p>Comentarios: la la la...<Link legacyBehavior href={`/todos/${data.id}/comments/1`}><a>Detalhes</a></Link></p>
        <p>Comentarios: le le le...<Link legacyBehavior href={`/todos/${data.id}/comments/2`}><a>Detalhes</a></Link></p>
        <p>Comentarios: li li li...<Link legacyBehavior href={`/todos/${data.id}/comments/3`}><a>Detalhes</a></Link></p>
        </>
    )
}