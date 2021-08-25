const Stack = require('./')

const stack = new Stack()

describe('Stack', () => {

  afterEach(() => stack.clear())

  test('null or undefined when add element', () => {
    try {
      stack.push()
    } catch (error) {
      expect(error.message).toThrowError('null or undefined element')
    }
  })

  test('add new element', () => {
    stack.push(1)
    expect(stack.peek()).toBe(1)
  })

  test('peek element', () => {
    stack.push('Hello World!')
    stack.push('Hello World!!!')
    stack.push('Hello World!!!!')
    stack.push('Hello World')
    expect(stack.peek()).toBe('Hello World')
  })

  test('check if isEmpty', () => {
    stack.push(1)
    stack.pop()
    expect(stack.isEmpty()).toBe(true)
  })

  test('pop element', () => {
    stack.push(1)
    stack.push(2)
    const element = stack.pop()
    expect(element).toBe(2)
    expect(stack.peek()).toBe(1)
  })

  test('clear stack', () => {
    let item = 0
    while (item <= 20) {
      stack.push(item++)
    }
    stack.clear()
    expect(stack.size()).toBe(0)
  })

  test('stack size', () => {
    let item = 0
    while (item <= 20) {
      stack.push(item++)
    }
    expect(stack.size()).toBe(21)
  })

  test('toString', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push('hello world')

    expect(stack.toString()).toContain('1')
    expect(stack.toString()).toContain('2')
    expect(stack.toString()).toContain('3')
    expect(stack.toString()).toContain('hello world')
  })
})
