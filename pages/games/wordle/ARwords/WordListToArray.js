import wordDataObject from './startWithWords.json'

export const WordListToArray = () => Object.values(wordDataObject).flat();