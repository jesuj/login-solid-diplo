import Encryptor from './Encryptor.interfaces'
import Decryptor from './Decryptor.interfaces'

export class BasicEncryptor implements Encryptor, Decryptor {
  encrypt (data: string): string {
    const encodedData = Buffer.from(data).toString('base64')
    return encodedData
  }

  decrypt (data: string): string {
    const decodedData = Buffer.from(data, 'base64').toString('utf-8')
    return decodedData
  }
}
