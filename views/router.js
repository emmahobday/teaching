import express from 'express'

import image from '../controller/imageController.js'

const router = express.Router()

router.route('/imageUpload')
  .get(image.getImages)
  .post(image.postImage)

export default router