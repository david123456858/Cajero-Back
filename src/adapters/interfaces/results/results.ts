export interface ISuccesProcess<T> {
  value: T
  success: true
  status: number
}

export interface IFailureProcess<T> {
  error: T
  success: false
  status: number
}
