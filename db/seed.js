
import mongoose from 'mongoose'
import connectToDb from '../lib/connectToDb.js'
import Image from '../model/imageModel.js'

async function seedDatabase() {
  try {
    await connectToDb()

    console.log('🤖 Database connected!')

    await mongoose.connection.db.dropDatabase()

    console.log('🤖 Database was dropped!')

    const image = await Image.create(
      [{
        url: 'https://i.imgur.com/TvUzQKk.jpg',
        caption: 'Made a planter for my Cactus!'
      }]
    )

    console.log(`🤖 ${image.length} images created!`)

    await mongoose.connection.close()
    console.log('🤖 Goodbye!')

  } catch (err) {
    console.log('🤖 Something went wrong with seeding!')
    console.log(err)

    await mongoose.connection.close()
    console.log('🤖 Goodbye!')
  }
}

seedDatabase()