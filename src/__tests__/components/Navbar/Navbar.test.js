import { render } from '@testing-library/react'
import { Navbar } from '../../../components/Navbar/index'
import { BrowserRouter } from 'react-router-dom'

/* eslint-disable no-undef */
describe('Test <Navbar />', () => {
  it('should render correctly', () => {
    const renderContainer = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    expect(renderContainer).toBeTruthy()
  })
})
