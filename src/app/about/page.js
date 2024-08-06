import Link from "next/link"

export default function About(){
    return (
        <div>
            <h1>Pagina de about</h1>
            <Link legacyBehavior href="../"><a>Voltar para a Home</a></Link>
        </div>
        
    )
}