export const arrayWithClasses = [class C1 { }]

export const objectWithClasses = {
    controller: class MyClass { }
}

export const functionReturnsClass = (): unknown => {
    return class A {}
}
