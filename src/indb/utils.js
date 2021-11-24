/**
 * 将一个不规则的路径转化为规则路径
 * @example
 * makeKeyPath(makeKeyChain('name.0..body[0].head')) => name[0].body[0].head
 */
export function makeKeyChain(path) {
  let chain = path.toString().split(/\.|\[|\]/).filter(item => !!item)
  return chain
}
export function makeKeyPath(chain) {
  let path = ''
  for (let i = 0, len = chain.length; i < len; i ++) {
    let key = chain[i]
    if (/^[0-9]+$/.test(key)) {
      path += '[' + key + ']'
    }
    else {
      path += path ? '.' + key : key
    }
  }
  return path
}

/**
 * 根据keyPath读取对象属性值
 * @param {*} obj
 * @param {*} path
 * @example
 * parse({ child: [ { body: { head: true } } ] }, 'child[0].body.head') => true
 */
export function parse(obj, path) {
  let chain = makeKeyChain(path)

  if (!chain.length) {
    return obj
  }

  let target = obj
  for (let i = 0, len = chain.length; i < len; i ++) {
    let key = chain[i]
    if (target[key] === undefined) {
      return undefined
    }
    target = target[key]
  }
  return target
}

export function modifyError(e) {
  e.message = '[GiimallIndexedDB]: ' + e.message
  return e
}
