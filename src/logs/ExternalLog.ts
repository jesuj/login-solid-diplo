import ILog from './Log.interfaces'

export class ExternalLog implements ILog {
  private readonly url = 'http://logger.odontoemergencias.com/api/log'
  register (data: string): void {
    fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          console.log(`Petición exitosa a la url: ${this.url}`)
        } else {
          console.error('Error en la petición')
        }
      })
      .catch(error => {
        console.error('Error en la petición:', error)
      })
  }
}
