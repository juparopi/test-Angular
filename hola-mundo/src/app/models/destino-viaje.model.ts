export class DestinoViaje{
    private selected: boolean;
    servicios: String[];
    constructor(public nombre:string, public imageUrl:string) {
        this.selected = false;
        this.servicios = ['piscina', 'desayunos'];
    }
    
    isSelected(): boolean{
        return this.selected;
    }
    setSelected(s:boolean){
        this.selected =s;
    }
}