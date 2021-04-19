import React from 'react'
import { render } from '../testUtils'
import HomeRoute from '../../src/pages/index'

describe('HomeRoute page', () => {
  it('should be able to matches snapshot', () => {
    const { asFragment } = render(<HomeRoute />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
