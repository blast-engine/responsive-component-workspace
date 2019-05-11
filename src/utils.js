export const keys = obj => Object.keys(obj || {})
export const k = keys
export const kv = obj => keys(obj).map(k => ({ k, v: obj[k] }))

export class Emitter {
  constructor() { this.handlers = [] }
  subscribe(handler) { this.handlers.push(handler) }
  unsubscribe(handler) { this.handlers = this.handlers.filter(h => h !== handler)}
  emit(result) { this.handlers.forEach(handler => handler(result)) }
}