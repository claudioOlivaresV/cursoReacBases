import { retornaArreglo } from "../src/base-pruebas/07-deses-arr";

describe('07-deses-arr.', () => {
    test('deberia retornar un strin y un numero', () => {
        const [letters, numebers] = retornaArreglo();
        expect(typeof letters).toBe('string')
        expect(typeof numebers).toBe('number')

        
    });
    
});