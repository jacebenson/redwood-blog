import { render } from '@redwoodjs/testing'

import BlogFooterLayout from './BlogFooterLayout'

describe('BlogFooterLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogFooterLayout />)
    }).not.toThrow()
  })
})
