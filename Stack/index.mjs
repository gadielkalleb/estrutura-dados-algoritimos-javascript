class Stack {
  #count = 0
  #items = new Map()

  push(element) {
    this.#items.set(this.#count, element)
    this.#count++
  }

  pop() {
    if (this.isEmpty()) return undefined

    this.#count--

    const result = this.#items.get(this.#count)

    this.#items.delete(this.#count)

    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }

    return this.#items.get(this.#count - 1)
  }

  isEmpty() {
    return this.#items.size === 0
  }

  clear() {
    this.#items.clear()
  }

  size() {
    return this.#items.size
  }

  toString() {
    if (this.isEmpty()) return ''

    const valuesList = []

    for (const value of this.#items.values()) {
      if (value && typeof value === 'object' && value.constructor === Object) {
        valuesList.push(JSON.stringify(value))
      } else {
        valuesList.push(`"${value}"`)
      }
    }

    return valuesList.toString()
  }

}

export default Stack
