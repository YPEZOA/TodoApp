import { Navbar } from '../../../src/components/Navbar'

describe('<Navbar /> component test', () => {
  it('Must display', () => {
    render(<Navbar />)
    expect(screen.queryByText(/Login/i).toBeInTheDocument())
  })
})
