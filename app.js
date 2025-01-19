// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let NombresLista = [] 
const ListaRef = document.getElementById("listaAmigos")
function agregarAmigo()
{
    var nombresaniadidos = document.getElementById("amigo").value

    if (nombresaniadidos.trim() !== "")
    {
        NombresLista.push(nombresaniadidos)
        console.log(NombresLista)
        
        
        ListaRef.innerHTML = '';
        
        for (var i = 0; i < NombresLista.length; i++)
        {
            const li = document.createElement("li")
            li.textContent = NombresLista[i]
            ListaRef.appendChild(li)
        }

        document.getElementById("amigo").value = ""
    }
    else
    {
        alert("Escriba un nombre")
    }
    
    
}

function sortearAmigo()
{
    if (NombresLista.length > 0)

    {

    
    const sorteado = Math.floor(Math.random() * NombresLista.length)

    const ListaSort = document.getElementById("resultado")
    ListaSort.innerHTML = ""

    const lisort = document.createElement("li")
    lisort.textContent = "El amigo secreto sorteado es: " + NombresLista[sorteado]
    ListaSort.appendChild(lisort)

    console.log(lisort.textContent)
    
    
    NombresLista.splice(0,NombresLista.length)
    ListaRef.innerHTML = ""  
    console.log(NombresLista + "Lista vaciada")
    }
    else
    {
        alert("No hay nadie en la lista para sortear")
    }
}
