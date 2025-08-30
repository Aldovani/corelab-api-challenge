export type NoteProps = {
  title: string
  text: string
  color: string
  isFavorite: boolean
}

export class Note {
  private _id: number | undefined
  private _title: string
  private _text: string
  private _color: string
  private _isFavorite: boolean

  constructor({ color, isFavorite, text, title }: NoteProps, id?: number) {
    this._id = id
    this._text = text
    this._color = color
    this._isFavorite = isFavorite
    this._title = title
  }

  set text(text: string) {
    this._text = text
  }

  get text() {
    return this._text
  }

  get id() {
    return this._id
  }

  set title(title: string) {
    this._title = title
  }

  get title() {
    return this._title
  }

  set isFavorite(isFavorite: boolean) {
    this._isFavorite = isFavorite
  }

  get isFavorite() {
    return this._isFavorite
  }

  set color(color: string) {
    this._color = color
  }

  get color() {
    return this._color
  }
}
