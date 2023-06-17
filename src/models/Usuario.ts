export class Usuario {
  private name!: string
  private userName!: string
  private password!: string

  autenticar (user: string, password: string): boolean {
    return this.userName === user && this.password === password
  }

  constructor (name: string, userName: string, password: string) {
    this.name = name
    this.userName = userName
    this.password = password
  }

  getName (): string {
    return this.name
  }

  getUserName (): string {
    return this.userName
  }

  getPassword (): string {
    return this.password
  }

  setName (nombre: string): void {
    this.name = nombre
  }

  setUserName (user: string): void {
    this.userName = user
  }

  setPassword (password: string): void {
    this.password = password
  }

  toString (): string {
    return `Usuario(nombre=${this.name}, user=${this.userName}, password=${this.password})`
  }
}
