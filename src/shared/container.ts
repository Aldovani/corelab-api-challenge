import { container } from 'tsyringe'
import { NotesRepository } from '../database/repositories/notes-repository'
import { PrismaNotesRepository } from '../database/repositories/prisma/prisma-notes-repository'

container.registerSingleton<NotesRepository>(
  'NotesRepository',
  PrismaNotesRepository,
)
