import { render } from '@redwoodjs/testing'

import BlogMenuLayout from './BlogMenuLayout'

describe('BlogMenuLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogMenuLayout />)
    }).not.toThrow()
  })
})
