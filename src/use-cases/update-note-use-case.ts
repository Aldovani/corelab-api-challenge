import { inject, injectable } from 'tsyringe'
import { NotesRepository } from '../database/repositories/notes-repository'
import { ResourceNotFoundException } from '../errors/resource-not-found'

type UpdateNoteUseCaseRequest = {
  title: string
  text: string
  color: string
  isFavorite: boolean
  noteId: number
}

@injectable()
export class UpdateNoteUseCase {
  constructor(
    @inject('NotesRepository')
    private noteRepository: NotesRepository,
  ) {}

  async execute({
    text,
    title,
    color,
    noteId,
    isFavorite,
  }: UpdateNoteUseCaseRequest) {
    const note = await this.noteRepository.findById(noteId)

    if (!note) {
      throw new ResourceNotFoundException()
    }

    note.text = text
    note.title = title
    note.color = color
    note.isFavorite = isFavorite

    await this.noteRepository.save(note)

    return note
  }
}
