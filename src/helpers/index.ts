import { FormEvent } from 'react'

export function formEventToJSON(e: FormEvent): any {
  e.preventDefault()
  const formData = new FormData(e.target as HTMLFormElement)
  var object = {}
  formData.forEach(function (value, key) {
    object[key] = value
  })
  return object
}
