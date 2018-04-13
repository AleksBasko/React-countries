export function somth() {
  return {
    type: 'somth'
  }
}

export function showPopup() {
  return {
      type: 'popupState'
  }
}

export function showTooltip(name) {
    return {
        type: 'SHOW_TOOLTIP',
        payload: {name}
    }
}