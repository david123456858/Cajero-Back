export interface IsearchRepository<T> {
  findById: (id: string) => Promise<T | Error>
  findAll: () => Promise <T | Error>
}
