import { IFailureProcess } from './../../interfaces/results/results'
import { ISuccesProcess } from '../../interfaces/results/results'

export const SuccessProcess = <T>(value: T, status: number): ISuccesProcess<T> => ({
  value,
  success: true,
  status
})
// Implementacion de facilitadores de errores
export const FailureProcess = <T>(error: T, status: number): IFailureProcess<T> => ({
  error,
  success: false,
  status
})
