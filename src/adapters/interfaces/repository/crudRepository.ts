/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { IsearchRepository } from './searchRepository'

export interface IcrudRepository<T> extends IsearchRepository<T> {
  save: (data: T) => Promise< void | Error>
  delete: (id: string) => Promise <void | Error>
  update: (data: T) => Promise <T | Error>
}
