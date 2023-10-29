export class DestinoViaje{
    private selected: boolean;
    constructor(public nombre:string, public imageUrl:string) {
        this.selected = false;
    }
    
    isSelected(): boolean{
        return this.selected;
    }
    setSelected(s:boolean){
        this.selected =s;
    }
}