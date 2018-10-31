import {State, Action} from './Artboard.types'
import ActionTypes from './Artboard.ActionTypes'

export const initialState = {
  isPerformingAction: false,
  isKeyDown: false,
  isMoving: undefined,
  isZooming: undefined,
  posX: 0,
  posY: 0,
  showGuides: true,
  showBoxInspector: false,
  zoomLevel: 1,
}

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ZOOM_IN_START:
      return {
        isKeyDown: true,
        isPerformingAction: true,
        isZooming: 'in',
      }

    case ActionTypes.ZOOM_OUT_START:
      return {
        isKeyDown: true,
        isPerformingAction: true,
        isZooming: 'out',
      }

    case ActionTypes.ZOOM_IN:
      return {
        zoomLevel: state.zoomLevel + 0.25,
      }

    case ActionTypes.ZOOM_OUT:
      return {
        zoomLevel: state.zoomLevel - 0.25,
      }

    case ActionTypes.MOVE_START:
      return {
        isKeyDown: true,
        isMoving: 'start',
      }

    case ActionTypes.MOVE_DRAG_START:
      return {
        isMoving: 'dragging',
      }

    case ActionTypes.MOVE_DRAG_END:
      return {
        isMoving: 'start',
        isKeyDown: false,
      }

    case ActionTypes.MOVE_DRAG:
      return {
        isMoving: 'dragging',
        posX: state.posX + (action.payload.posX * 1) / state.zoomLevel,
        posY: state.posY + (action.payload.posY * 1) / state.zoomLevel,
      }

    case ActionTypes.MOVE_END:
      return {
        isMoving: undefined,
      }

    case ActionTypes.PERFORM_ACTION_START:
      return {
        isPerformingAction: true,
      }

    case ActionTypes.PERFORM_ACTION_END:
      return {
        isPerformingAction: false,
      }

    case ActionTypes.ZOOM_RESET:
      return {
        isZooming: undefined,
      }

    case ActionTypes.TOGGLE_GUIDES:
      return {
        showGuides: !state.showGuides,
      }

    case ActionTypes.TOGGLE_BOX_INSPECTOR:
      return {
        showBoxInspector: !state.showBoxInspector,
      }

    case ActionTypes.RESET:
      const {isZooming, posX, posY, ...resetState} = initialState

      return resetState

    default:
      return {}
  }
}

export default reducer