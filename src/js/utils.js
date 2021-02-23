import { string } from "joi"

//template row
export function row(content, styles = '') {
  return `<div class="row" style="${styles}">${content}</div>`
}

//template col
export function col(content, colName = 'col') {
  return `<div class="${colName}">${content}</div>`
}

// obj to string
export function css(styles = {}) {

  if (typeof styles === 'string') {
    return styles
  }

  const toString = key => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}

// template form 
export function block(type) {
  return `
    <form name="${type}" class="mt-3">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group mt-3">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm mt-3">Добавить</button>
    </form>
    <hr/>
  `
}