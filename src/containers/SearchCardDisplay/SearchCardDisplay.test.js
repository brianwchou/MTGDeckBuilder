import { SearchCardDisplay, mapStateToProps } from 'containers/SearchCardDisplay/SearchCardDisplay'
import React from 'react'
import renderer from 'react-test-renderer'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('SearchCardDisplay', () => {

    const dummyCard = {name:"dummy", image_uris:{small:"https://via.placeholder.com/300"}}
    const mockCards = [dummyCard]

    test('mapStateToProps', () => {
        const mockCards = [{name: "opt"}]
        const mockCardCount = {opt: 2}
        const mockState = {searchDisplay: {cards: mockCards} , deckList: {cardCount: mockCardCount}}

        expect(mapStateToProps(mockState)).toEqual({ cards: [ { name: 'opt' } ], counts: { opt: 2 } })
    })

    test('rendering cards correctly', () => {
        const tree = renderer
            .create(<SearchCardDisplay cards={mockCards}  />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    })

    test('getCardInfo dispatches addToDecklist', () => {
        
        const onClickSpy = jest.fn()
        const wrapper = mount(<SearchCardDisplay cards={mockCards} dispatch={onClickSpy} />)

        const mockTarget = {target: { name: "add"} }
        let container = wrapper.find("div")
        let containerButton = container.find("button").at(0)

        expect(onClickSpy).not.toHaveBeenCalled();
        containerButton.simulate('click', mockTarget);
        expect(onClickSpy).toHaveBeenCalled();

    })

    test('getCardInfo dispatches addToMaybe', () => {
 
        const onClickSpy = jest.fn()
        const wrapper = mount(<SearchCardDisplay cards={mockCards} dispatch={onClickSpy}  />)
        
        const mockTarget = {target: { name: "other"} }
        let container = wrapper.find("div")
        let containerButton = container.find("button").at(1)

        expect(onClickSpy).not.toHaveBeenCalled();
        containerButton.simulate('click', mockTarget);
        expect(onClickSpy).toHaveBeenCalled();
        
    })

    test('getCardInfo does nothing when button name is neither add or other', () => {
 
        const onClickSpy = jest.fn()
        const wrapper = mount(<SearchCardDisplay cards={mockCards} dispatch={onClickSpy}  />)
        
        const mockTarget = {target: { name: ""} }
        let container = wrapper.find("div")
        let containerButton = container.find("button").at(0)

        expect(onClickSpy).not.toHaveBeenCalled();
        containerButton.simulate('click', mockTarget);
        expect(onClickSpy).not.toHaveBeenCalled();
        
    })

})