export const debounce = (callback, delay) => {
    let timerId;
    return (...args) => {
        timerId && clearTimeout(timerId);
        timerId = setTimeout(
            () => callback(...args),
            delay
        );
    }
};