

import{isProduct} from '../validation.js'

describe('isProduct',()=>{
	test('om det finns en riktig produkt visa true',()=>{

		expect({id:'A6',title:'byxor', price:200}).toBe(true)
	})
})