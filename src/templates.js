import { fieldsById } from '@/letters'

export default function useLetterTemplate(props) {
  function renderValue(field, defaultValue = null) {
    if (props.data[field]) {
      return props.data[field]
    }
    if (defaultValue) {
      return defaultValue
    }
    if (defaultValue === false) {
      return ''
    }
    if (fieldsById[field]) {
      return `<${fieldsById[field].name}>`
    }
    return `<${field}>`
  }
  return {
    renderValue
  }
}
