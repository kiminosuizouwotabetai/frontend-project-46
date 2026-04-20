import { readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import parse from './parsers.js'

const getAbsolutePath = filepath => path.resolve(process.cwd(), filepath)

const getFileExtension = filepath => path.extname(filepath).slice(1)

const readAndParseFile = filepath => {
  const absolutePath = getAbsolutePath(filepath)

  const fileContent = readFileSync(absolutePath, 'utf-8')

  const format = getFileExtension(filepath)

  return parse(fileContent, format)
}

export default readAndParseFile
