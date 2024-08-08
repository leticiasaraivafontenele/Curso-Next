export default async function getTodo(paras){
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${paras}`)
    const ret = await data.json()
    return(ret)
}