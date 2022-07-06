const defaultState = {
    choose: 'Простые формы'
}


export const chooseReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SIMPLE': {
            return { ...state, choose: 'Простые формы' }
        }
        case 'MINIMAL': {
            return { ...state, choose: 'Минимализм в тренде' }
        }
        case 'ART': {
            return { ...state, choose: 'Это Арт' }
        }
        default:
            return state
    }
}