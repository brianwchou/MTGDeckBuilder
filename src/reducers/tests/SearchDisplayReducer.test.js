import searchDisplay from 'reducers/SearchDisplayReducer';
import { SEARCH } from 'actions/SearchActions';

describe('[Unit] searchDisplay reducer', () => {
    test('initialize searchDisplay', () => {

        const initialState = { cards: [] };
        const newState = searchDisplay(initialState, {});
        expect(newState).toEqual(initialState)
    }); 

    test('loading into searchDisplay', () => {

        const dummyCards = [{name: 'shock'}, {name: 'counterspell'}, {name: 'thoughtseize'}]
        const initialState = { cards: [] };
        const action = { type: SEARCH.LOAD, 
            cards: dummyCards
        };
        const newState = searchDisplay(initialState, action);
        expect(newState).toEqual({cards: dummyCards});
    });
});