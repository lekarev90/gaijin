declare module '*.scss' {
  type IClassNames = Record<string, string>

  const classnames: IClassNames;
  export = classnames
}
