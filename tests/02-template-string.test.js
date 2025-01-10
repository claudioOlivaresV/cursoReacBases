import { getSaludo } from "../src/base-pruebas/02-template-string";

describe('tets 02-template-string.js', () => {
    test('should return saludo ', () => {

        //arrange
        const name = 'claudio';
        const saludo = 'Hola claudio'
        //act
        const result = getSaludo(name);
        //assert
        expect(saludo).toBe(result)
        
    });
    
});