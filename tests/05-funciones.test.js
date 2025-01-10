import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones";

describe('05-funciones', () => {
    test('deberia retornar un objeto ', () => {
        // arrage
        const objeto = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        //act
        const result = getUser();
        //assert
        expect(result).toEqual(objeto)
    });
    test('deberia retornar un objeto modificado ', () => {
        // arrage
        const user = 'user'
        const objeto = {
            uid: 'ABC567',
            username: user
        }
        //act
        const result = getUsuarioActivo(user);
        //assert
        expect(result).toEqual(objeto)
    });
    
});