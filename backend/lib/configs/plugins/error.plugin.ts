import { wrapResponse } from '@lib/utils/response'
import Elysia, { NotFoundError, ValidationError } from 'elysia'
import { EntryConfictError, EntryNotFoundError, NotAuthorizedError, RequestViolationError } from '@lib/configs/errors'

export const errorPlugin = new Elysia().onError({ as: 'scoped' }, ({ error, set }) => {
  if (error instanceof EntryConfictError) {
    set.status = 409
    return wrapResponse(null, set.status, error.message)
  } else if (error instanceof EntryNotFoundError) {
    set.status = 404
    return wrapResponse(null, set.status, error.message)
  } else if (error instanceof RequestViolationError) {
    set.status = 400
    return wrapResponse(null, set.status, error.message)
  } else if (error instanceof NotAuthorizedError) {
    set.status = 401
    return wrapResponse(null, set.status, error.message)
  } else if (error instanceof ValidationError) {
    set.status = 422
    return wrapResponse(null, set.status, error.message)
  } else if (error instanceof NotFoundError) {
    set.status = 404
    return wrapResponse(null, set.status, error.message)
  } else if (error instanceof Error) {
    set.status = 500
    return wrapResponse(null, set.status, error.message)
  }
})
