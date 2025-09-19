import { SUCCESS_MESSAGE } from '@lib/config/constant'
import type { WrappedResponse } from '@lib/models/standard-response.model'

export function wrapResponse<T>(data: T, code = 200, message = SUCCESS_MESSAGE, count?: number): WrappedResponse<T> {
  const response: WrappedResponse<T> = {
    data,
    meta: { code, message, count },
  }
  return response
}
