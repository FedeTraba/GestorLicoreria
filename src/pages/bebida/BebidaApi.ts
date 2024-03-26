export function searchBebidas(){
    if (!localStorage['bebidas']){
        localStorage['bebidas'] = '[]';
    }

    let bebibas = localStorage['bebidas'];
    bebibas = JSON.parse(bebibas);

    return bebibas;
}


export function removeBebida(id:string){
    let bebibas = searchBebidas();
    let indice = bebibas.findIndex((bebida: any) => bebida.id == id)
    bebibas.splice(indice,1);
    localStorage['bebidas'] = JSON.stringify(bebibas);
}


export function saveBebida(bebiba:any){
    let bebibas = searchBebidas();
    bebibas.push(bebiba)
    localStorage['bebidas'] = JSON.stringify(bebibas);
}