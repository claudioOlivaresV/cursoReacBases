import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp";
import heroes from "../src/data/heroes";

describe('08-imp-exp.js', () => {
    test('deberia retornar el id ', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero.id).toBe(1)
        
    });
    test('deberia retornar undefined', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeUndefined()
    });
    test('deberia 3 heroes DC ', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3)
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
        
    });
    test('deberia 2 heroes Marvel ', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2)
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
        
    });
    

    
    
});