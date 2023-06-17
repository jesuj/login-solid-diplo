import Encryptor from './Encryptor.interfaces'

export class CaesarEncryptor implements Encryptor {
  private readonly ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'

  encrypt (data: string): string {
    const shift = 4
    let encryptedData = ''

    for (let i = 0; i < data.length; i++) {
      const char = data[i].toUpperCase()
      const index = this.ALPHABET.indexOf(char)

      if (index !== -1) {
        const shiftedIndex = (index + shift) % this.ALPHABET.length
        const encryptedChar = this.ALPHABET[shiftedIndex]
        encryptedData += encryptedChar
      } else {
        encryptedData += char
      }
    }
    return encryptedData
  }
}
