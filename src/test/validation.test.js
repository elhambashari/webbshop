

import{isProduct} from '../validation.js'

describe('isProduct',()=>{
	test('om det finns en riktig produkt visa true',()=>{

		expect(isProduct({id:'A6',name:'byxor', price:200})).toBe(true)
	})
})