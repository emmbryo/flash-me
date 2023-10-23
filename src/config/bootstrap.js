/** 
 * Module for bootstapping 
 */

import { IoCContainer } from '../util/IoCContainer.js'

import { FlashcardController } from '../controllers/flashcard-controller.js'
import { FlashcardService } from '../services/flashcard-service.js'
import { FlashcardRepository } from '../repositories/flashcard-repository.js'

const iocContainer = new IoCContainer()

iocContainer.register('FlashcardRepository', FlashcardRepository, {})

iocContainer.register('FlashcardService', FlashcardService, {
  dependencies: [
    'FlashcardRepository'
  ]
})

iocContainer.register('FlashcardController', FlashcardController, {
  dependencies: [
    'FlashcardService'
  ]
})

export const container = Object.freeze(iocContainer)