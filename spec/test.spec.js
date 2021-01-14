import htkala from '../http-module'

describe('Testing the htkala library', ()=> {
    it('should fetch a resource with get method', async ()=> {
        // let result = await htkala.get('http://localhost:3000/teachers')
        expect(result).toBeInstanceOf(Array)
    })
})