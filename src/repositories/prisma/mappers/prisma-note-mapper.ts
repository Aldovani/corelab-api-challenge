import { note as PrismaNote } from '@prisma/client'
import { Note } from '../../../../entities/note'

export class PrismaNoteMapper {
  static toPrisma(note: Note): PrismaNote {
    return {
      title: note.text,
      text: note.text,
      color: note.color,
      isFavorite: note.isFavorite,
      id: note.id!,
    }
  }

  static toEntity(note: PrismaNote): Note {
    return new Note(
      {
        color: note.color!,
        isFavorite: note.isFavorite!,
        text: note.text,
        title: note.title,
      },
      note.id,
    )
  }
}
