import Encryptor from './Encryptor.interfaces'

export class ReverseEncryptor implements Encryptor {
  encrypt (data: string): string {
    const reversedData = data.split('').reverse().join('')
    return reversedData
  }
}
