import { Element } from 'cheerio';

export interface Sorteo {
  numero: string,
  titulo: string,
  fecha: string,
  link: Element | string | undefined,
}
