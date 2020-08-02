export default interface RouteParams {
    path: string,
    name?: string,
    params: { title?: string },
    fullPath?: string,
    hash?: string,
    matched?: Array<any>,
    meta?: object,
    query?: any,
}
