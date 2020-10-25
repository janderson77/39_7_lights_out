import React from 'react'
import {render } from '@testing-library/react'
import Board from './Board'

it('renders without crashing', () => {
    render(<Board/>)
})

it('matches snapshot', () => {
    const {asFragment} = render(<Board chanceLightStartsOn = {0} />)
    expect(asFragment()).toMatchSnapshot();
    
})