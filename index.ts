export const classes = [
    class C1 {
    },
    class C2 {
    },
    class C3 {
    },
]

export const objectWithClasses = {
    controller: class MyClass { }
}

export const a = (): unknown => {
    return class A {}
}

export function printClasses(): void {
    for (const cls of classes) {
        const obj = new cls()
        console.log(obj)
    }
}