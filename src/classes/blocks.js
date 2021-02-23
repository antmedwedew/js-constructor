import {col, css, row} from '../js/utils'

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован')
  }
}


// classes extends class Block---------------

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {tag = 'h1', styles} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`, 'col-sm'), css(styles))
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {styles} = this.options
    const html = this.value.map(item => col(item, 'col-sm'))

    return row(html.join(''), css(styles))
  }
}


export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {styles} = this.options
    return row(col(`<p>${this.value}</p>`, 'col-sm'), css(styles))
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {styles, imageStyles, alt = ''} = this.options
    return row(col(`<img src="${this.value}" style="${css(imageStyles)}" alt="${alt}"/>`, 'col-4'), css(styles))
  }
}

export class TextBottomImgBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {styles, tag} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`, 'col-4'), css(styles))
  }
}