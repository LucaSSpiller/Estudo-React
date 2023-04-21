//É o componente principal
//Tudo que for feito nele, será renderizado na tela
//Export - "Isso pode ser chamado por outro arquivo"
//Para por algo de js(consta nome por ex), dentro de uma tag jsx(exemplo1 nome={}, deve ser colocado entre {})
//Na segunda const(constante), foi colocado o setNumero depois do numero, pois o setNumero é uma função criada que mudara o valor do numero se necessario
//o useState, reconstroi a constante numero quando alterada.


export default function App(){


   

    return(
        <>
            
        </>
    )
}

/**
 * import { useState } from "react";
import Exemplo1 from "./Components/Exemplo1";

 const nome = 'Javascript'

    const [numero, setNumero] = useState(0)

 * 
 * <h1>Revisão React</h1>
            <p>Numero do app: {numero}</p>
            <Exemplo1 nome={nome} numero={numero} setNumero={setNumero}>
                <p>ESTE VEM DO PAI</p>    
            </Exemplo1> ""
 * 
 */