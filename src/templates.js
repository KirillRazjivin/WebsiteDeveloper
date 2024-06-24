// import { row, col, css } from "./utils"


//  function title(block){
//     const {tag = 'h1', styles} = block.options
//     return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
// }

//  function text(block){
//     const tag = block.options.tag ?? 'h1'
//     const styles = block.options.styles
//     return row(col(`<${tag}>${block.value}</${tag}>`), css(styles)) 
 
// }


//  function columns(block){
//   const html = block.value.map((item)=> col(item))
//   const styles = block.options.styles
//   return row(html.join(''),css(styles))
// }

//  function image(block){
//     const {imageStyles, alt='Упс..', styles} = block.options
//     return row(`<img src=${block.value} alt=${alt} style=${css(imageStyles)} />`, css(styles))
// }

// export const templates = {
//     title,
//     text, 
//     columns,
//     image
// }