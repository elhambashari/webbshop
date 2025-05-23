

import{isProduct} from '../validation.js'

describe('isProduct',()=>{
	test('om det finns en riktig produkt visa true',()=>{

		expect(isProduct({id:'A6',name:'byxor', price:200})).toBe(true)
	})
})

test('om finns inte produkt visa false',()=>{
	expect(isProduct({id:'A6',name:'byxor'})).toBe(false)
})