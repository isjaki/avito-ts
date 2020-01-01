declare module '*.css' {
    const content: {[className: string]: string};
    export = content;
}

declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}

declare module '*.sass' {
    const content: {[className: string]: string};
    export = content;
}

declare module 'normalizr';

declare module 'react-lazy-load';
