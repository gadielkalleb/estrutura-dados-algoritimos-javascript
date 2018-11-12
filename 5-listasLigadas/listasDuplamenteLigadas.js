function DoublyLinkedList() {
  let Node = function(el) {
    this.el = el
    this.next = null
    this.tail = null
  }
  let length = 0
  let head = null
  let tail = null

  this.append = function(el) {
    let node = new Node(el)
    let current;
    // primeiro nó da lista
    if (head === null) head = node 
    else {
      current = head
      // percorre a lista com um laço até encontrar o ultimo elemento
      while (current.next) {
        current = current.next
      }
      // obtem o último item e faz next receber node para fazer a ligação
      current.next = node
    }
    length++ //atualilza o tamanho da lista
  }
  this.insert = function(position, el) {
    if (position >= 0 && position <= length) {
      let node = new Node(el)
      let current = head
      let previous
      let index = 0
      if (position === 0) {
        if (!head) {
          head = node
          tail = node
        } else {
          node.next = current
          current.prev = node
          head = node
        }
      } else if (position === length) {
        current = tail
        current.next = node
        node.prev = current
        tail = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next 
        }
        node.next = current
        previous.next = node

        current.prev = node
        node.prev = previous
      }
      length++
      return true
    } else return false
  }
  this.removeAt = function(position) {
    // verifica valores fora do intervalo
    if ( position > -1 && position < length) {
      let current = head
      let previous
      let index = 0
      // remove o primeiro elemento
      if (position === 0) {
        head = current.next
        if (length === 1) {
          tail = null
        } else {
          head.prev = null
        }
      } else if (position === length) {
        current = tail
        tail = current.prev
        tail.next = null
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        // faz a ligação de previous com next de current: pula esse elemento
        // para remove-lo
        previous.next = current.next
        current.next.prev = previous
      }
      length--
      return current.el
    } else {
      return null
    }
  }
  this.remove = function(el) {
    let index = this.indexOf(el)
    return this.removeAt(index)
  }
  this.indexOf = function(el) {
    let current = head
    let index = -1
    while (current) {
      if (el === current.el) return index
      index++
      current = current.next
    }
    return -1
  }
  this.isEmpty = function() {
    return length === 0
  }
  this.size = function() { return length }
  this.toString = function() {
    let current = head
    let string = ''
    while (current) {
      if ((typeof current.el) === 'object') {
        current.el = JSON.stringify(current.el)
      }
      string += current.el + (current.next ? ' ' : null)
      current = current.next
      
    }
    return string
  }
}

module.exports = DoublyLinkedList