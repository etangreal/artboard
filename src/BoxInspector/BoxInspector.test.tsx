import * as React from 'react'
import {mount} from 'enzyme'
import BoxInspector from './index'

describe('Render', () => {
  test('Can render component', () => {
    expect(mount(<BoxInspector />)).toBeTruthy()
  })
})
