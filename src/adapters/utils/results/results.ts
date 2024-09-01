import { IFailureProcess } from './../../interfaces/results/results'
import { ISuccesProcess } from '../../interfaces/results/results'

export const SuccessProcess = <T>(error: T, status: number): ISuccesProcess<T> => ({
  error,
  success: true,
  status
})
// Implementacion de facilitadores de errores
export const FailureProcess = <T>(error: T, status: number): IFailureProcess<T> => ({
  error,
  success: false,
  status
})
