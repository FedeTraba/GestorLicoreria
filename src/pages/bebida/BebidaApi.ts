export function searchBebidas(){
    if (!localStorage['bebidas']){
        localStorage['bebidas'] = '[]';
    }

    let bebidas = localStorage['bebidas'];
    bebidas = JSON.parse(bebidas);

    return bebidas;
}


export function removeBebida(id:string){
    let bebidas = searchBebidas();
    let indice = bebidas.findIndex((bebida: any) => bebida.id == id)
    bebidas.splice(indice,1);
    localStorage['bebidas'] = JSON.stringify(bebidas);
}


export function saveBebida(bebida:any){
    let bebidas = searchBebidas();
    if (bebida.id){
        // Editar
        let indice = bebidas.findIndex((b: any) => b.id == bebida.id)
        bebidas[indice] = bebida;
    }else{
        // Nuevo
        bebida.id = Math.round(Math.random() * 100000);
        bebidas.push(bebida);
    }
    localStorage['bebidas'] = JSON.stringify(bebidas);
}

export function saveBebidaById(id: string){
    let bebidas = searchBebidas();
    return bebidas.find((bebida: any)=> bebida.id == id); 
}