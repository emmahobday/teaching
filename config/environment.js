import dotenv from 'dotenv'

dotenv.config()

const environment = process.env.NODE_ENV || 'development'

export const dbURI = environment === 'production'

  ? process.env.MONGODB_URI

  : `mongodb://localhost/imageUploaddb-${environment}`

export const port = process.env.PORT || 8000

export const secret = process.env.SECRET || 'This is a really long secret string no one is going to guess 3onsfdnisdo.'

