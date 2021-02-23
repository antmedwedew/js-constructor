import image from '../assets/img.jpeg'
import {TitleBlock, TextBlock, ImageBlock, TextBottomImgBlock, ColumnsBlock} from '../classes/blocks'

export const model = [
  new TitleBlock ('Заголовок H1', {
    tag: 'h2',
    styles: {
      color: 'black',
      'text-align': 'center',
    }
  }),
  
  new TextBlock ('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit vel repellat et ad ut dolore suscipit qui explicabo voluptates commodi molestiae vitae aut, ab, non recusandae sint, laborum quis voluptate necessitatibus quam fuga? Dolores illo molestias illum magnam magni aspernatur doloribus consequatur rem, laudantium, libero suscipit corrupti laborum harum sed!', {
    styles: {
      'padding-top': '30px',
      'font-size': '20px'
    }
  }),
  
  new ColumnsBlock ([
    'текст в колонке',
    'текст в колонке',
    'текст в колонке'
    ], 
    {
      styles: {
        'text-align': 'center',
        color: 'green',
        'font-size': '20px',
        'margin-top': '30px'
      }
    }),

  new ImageBlock (image, {
    styles: {
      'margin-top': '50px',
      'text-align': 'center',
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'img'
  }),

  new TextBottomImgBlock ('Эта китька показывает тебе язик)))', {
    tag: 'h4',
      styles: {
        'text-align': 'center',
        'padding-top': '15px'
      }
  })
]