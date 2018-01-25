'use strict'
import { describe, it } from 'mocha'
import { expect } from 'chai'

import { simulation, salute } from '../app/simulation'

describe('Test prueba', () => {
  it('Async test', async () => {
    let resolve = await simulation('hola')

    expect(resolve).to.equal('hola')
  })

  it('Salute test', () => {
    let nombre = 'Carlos'

    expect(salute(nombre)).to.equal('Hola Carlos')
  })
})
