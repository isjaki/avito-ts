export interface Action {
    type: string;
    [payload: string]: any;
}

export interface Option {
    value: string;
    displayValue: string;
}