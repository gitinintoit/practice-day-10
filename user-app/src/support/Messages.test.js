import {render} from '@testing-library/react'
import { Component } from 'react';
import Message from '../components/Message'

test('first test case for messages',()=>{
    const element=render(<Message message='HI'/>);
    expect(element).toMatchSnapshot();
})

test('should show nothing on empty string',()=>{
    const element=render(<Message message=''/>);
    expect(element).toMatchSnapshot();
})