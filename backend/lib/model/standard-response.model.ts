export interface WrappedResponse<T> {
  data: T
  meta: {
    code: number
    message: string
    count?: number
  }
}
