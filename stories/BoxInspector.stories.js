import * as React from 'react'
import {storiesOf} from '@storybook/react'
import OptionTile, {OptionTileGuides} from './Examples/OptionTile.Example'
import BoxInspector from '../src/BoxInspector'

const stories = storiesOf('BoxInspector', module)

stories.add('Example', () => (
  <div>
    Hover your mouse on any element
    <br />
    <div
      style={{
        boxSizing: 'border-box',
        background: '#eee',
        padding: 20,
        position: 'relative',
        height: '100%',
        minHeight: 193,
        width: 360,
      }}
    >
      <BoxInspector>
        <OptionTileGuides />
        <OptionTile />
      </BoxInspector>
    </div>
  </div>
))
