export const debounce = (func: Function, ms: number): Function => {
    let timer: number | null = null;

    return (...args: any[]) => {
        if (timer !== null) {
            clearTimeout(timer);
        }

        timer = window.setTimeout(() => {
            func(...args);
            timer = null;
        }, ms);
    };
};

export const formatPrice = (price: string): string => price
    .split('')
    .reverse()
    .map((num, i) => {
        if ((i + 1) % 3 === 0) {
            return ` ${num}`;
        }
        return num;
    })
    .reverse()
    .join('');