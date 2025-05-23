

import{isProduct,isCartItem} from '../validation.js'

describe('isProduct',()=>{
	test('om det finns en riktig produkt visa true',()=>{

		expect(isProduct({id:'A6',name:'byxor', price:200})).toBe(true)
	})
})

test('om finns inte produkt visa false',()=>{
	expect(isProduct({id:'A6',name:'byxor'})).toBe(false)
})

describe('isCartItem', () => {
  test('om det finns item i cart visa true', () => {
    expect(isCartItem({ id: 'p1', name: 'T-shirt', price: 100, quantity: 2 })).toBe(true)
  })

  test('om det finns ingen item visa false', () => {
    expect(isCartItem({ id: 'p1', name: 'T-shirt', price: 100 })).toBe(false)
  })
})