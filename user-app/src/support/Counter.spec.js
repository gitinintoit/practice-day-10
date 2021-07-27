import  Counter  from '../components/Counter'
import { render,screen } from '@testing-library/react';

test('scenario 1',()=>{
    render(<Counter count='5'/>);
    const element=screen.getByText("5");
    expect(element.innerHTML).toBe("5");
    expect(element.tagName).toEqual('SPAN')
})