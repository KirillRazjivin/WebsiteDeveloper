import image from './assets/image.png'
import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from './clasess/block'

export const model = [
    new TitleBlock( 'Конструктор сайтов на чистом JavaScript',  {
        tag: 'h2', 
        styles: {
            background: 'linear-gradient(to right, #316a2d, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'

        } 
    }),
    
    new ImageBlock ( image, {styles:{
        padding: '2rem 0',
        display: 'flex',
        'justify-content': 'center'
    },
    imageStyles: {
        width: '500px',
        heigth: 'auto',
        'border-radius': '10%'
    }}),
   
    new TextBlock ([
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, explicabo?   Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'Repellat autem, odio voluptates quia veniam quidem sunt quod tempore odit ab excepturi sit ratione nihil omnis dolorum, adipisci aliquam, atque fugit.'
    ],{
        tag: 'p', 
        styles: {
            background: 'linear-gradient(to right, #316a2d, #493240)',
            color: '#fff',
            padding: '1,5rem',
            'text-align': 'center'

        }
    } ),

    new ColumnsBlock([
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laudantium alias enim optio illum, error rerum velit assumenda illo amet, cupiditate excepturi officia dolores aut fuga veniam mollitia quis porro fugit voluptatibus debitis accusamus inventore deserunt magni? .',
        'est doloremque doloribus soluta ipsa ea aliquid numquam impedit tempore blanditiis expedita voluptas delectus qui cupiditate? Eos ad necessitatibus et fuga.',
        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur sunt ex quis corrupti amet dignissimos nemo rem est quam? Quaerat.'

    ], {
        tag: 'a',
        styles: {
          background: 'linear-gradient(to bottom, #9eb5b7, #08bec7)',
          padding: '2rem',
          color: '#fff',
          'front-weigth': 'bold'
        }  
      })   

   
    
    
]


