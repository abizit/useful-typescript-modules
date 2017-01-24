export function aQ(selector :string){
    return new Chain(selector);
}
export class Chain{
    private elements : NodeList;
    constructor(
        public selector: string
    ){
        this.elements = document.querySelectorAll(selector);
        console.log(selector, this.elements);
    }

    static forEach(array : NodeList, callback :any, scope?:any){
        for (let i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]); // passes back stuff we need
        }
    }

    find(targetEl){
            if(typeof targetEl != "string"){
                Chain.forEach(this.elements,function(elem,index,value){
                    console.log(targetEl);
                    console.log(index, value);
                });
            }
            console.log('hello test');

        return this;
    }
}
