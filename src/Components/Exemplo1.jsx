export default function Exemplo1(props){
return(
    <div>
        <h2>Exemplo 1</h2>
        <p>Este é o exemplo 1</p>
        <p>Nome vindo do App: {props.nome}</p>
        <p>Numero do Exemplo1: {props.numero}</p>
        <button onClick={()=> props.setNumero(props.numero + 1)}>Aumentar</button>
        {props.children}
    </div>
)
}