import { col, row, css } from "../utils"

class Block {
    constructor( value, options) {
      
        this.value = value,
        this.options = options
    }
    toHTML(){
        throw new Error(('Метод toHTML должен быть реализован!'))
    }
}

export class TitleBlock extends Block{
    constructor(value,options){
        super(value, options)
    }
    toHTML(){
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ImageBlock extends Block{
    constructor(value,options){
        super(value, options)
    }
    toHTML(){
        const {imageStyles, alt='Упс..', styles} = this.options
         return row(`<img src=${this.value} alt=${alt} style=${css(imageStyles)} />`, css(styles))
    }
}

export class TextBlock extends Block{
    constructor(value,options){
        super(value, options)
    }
    toHTML(){
        const tag = this.options.tag ?? 'h1'
        const styles = this.options.styles
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles)) 
    }
}

export class ColumnsBlock extends Block{
    constructor(value,options){
        super( value, options)
    }
    toHTML(){
        const html = this.value.map((item)=> col(item))
        const styles = this.options.styles
         return row(html.join(''),css(styles))
    }
}