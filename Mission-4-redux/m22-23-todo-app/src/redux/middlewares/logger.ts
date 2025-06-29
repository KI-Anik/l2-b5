const logger = (state) => (next) => (action) => {
    console.group(action.type);
    console.info('prev info', state.getstate())
    const result = next(action)
    console.info('next state', state.getstate())
    console.groupEnd()
    return result
}

export default logger