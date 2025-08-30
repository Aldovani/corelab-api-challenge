import { inject, injectable } from 'tsyringe'
import { NotesRepository } from '../database/repositories/notes-repository'
import { Note } from '../entities/note'

type CreateNoteUseCaseRequest = {
  title: string
  text: string
  color: string
  isFavorite: boolean
}

@injectable()
export class CreateNoteUseCase {
  constructor(
    @inject('NotesRepository')
    private noteRepository: NotesRepository,
  ) {}

  async execute({ isFavorite, text, title, color }: CreateNoteUseCaseRequest) {
    const rawNote = new Note({
      isFavorite,
      text,
      title,
      color,
    })

    const note = await this.noteRepository.create(rawNote)

    return note
  }
}
