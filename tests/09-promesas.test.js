import { getHeroeByIdAsync } from "../src/base-pruebas/09-promesas";

describe('08-imp-exp.js', () => {
    test('deberia retornar el un heroe ', (done) => {
        const id = 1;
        const response = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        }
        getHeroeByIdAsync(id).then(heroe => {

            expect(heroe).toEqual(response)
            done()
        })
   
        
    });
    test('deberia retornar el un error ', (done) => {
        const id = 100;
        const response = 'No se pudo encontrar el héroe'
        getHeroeByIdAsync(id).catch(error => {

            expect(error).toBe(response)
            done()
        })
   
        
    });

    
});