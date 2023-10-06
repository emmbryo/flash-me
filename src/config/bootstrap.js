/** 
 * Module for bootstapping 
 */

import { IoCContainer } from '../util/IoCContainer.js'

import { FlashcardController } from '../controllers/flashcard-controller.js'
import { FlashcardService } from '../services/flashcard-service.js'

const iocContainer = new IoCContainer()

iocContainer.register('FlashcardService', FlashcardService, {})

iocContainer.register('FlashcardController', FlashcardController, {
  dependencies: [
    'FlashcardService'
  ]
})

export const container = Object.freeze(iocContainer)