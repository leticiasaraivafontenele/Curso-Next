import Link from "next/link"
export default function Comment({params}){
    return(
        <>
            <h2>Comentario: {params.commentId}</h2>
            <Link legacyBehavior href= {`/todos/${params.todoId}`} ><a>Voltar</a></Link>

        </>
    )
}