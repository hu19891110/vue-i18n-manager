import storageHelper from 'storage-helper'
import find from 'lodash/find'

export const availableLanguages = state => state.availableLanguages

export const languages = state => state.languages

export const currentLanguage = state => state.currentLanguage

export const urlPrefix = state => state.currentLanguage.urlPrefix

export const languageFilter = state => state.languageFilter

export const translation = state => {
  const { translation, translations, currentLanguage } = state
  const { id } = currentLanguage
  let result = translations[id]

  if (!result) {
    result = translation
  }

  return result
}

export const forceTranslation = state => state.forceTranslation

export const defaultCode = state => {
  const {
    persistent,
    defaultCode,
    storageKey,
    forceTranslation,
    availableLanguages,
    languages
  } = state
  const storagedLangCode = storageHelper.getItem(storageKey)

  if (persistent && storagedLangCode) {
    const languageList = forceTranslation ? languages : availableLanguages

    /**
     * This part is actually checking if the language stored exists in the
     * current array of languages, otherwise it means that our localstorage value
     * is too old and we forgot to remove it from the browser memory.
     */
    const exists = find(languageList, { code: storagedLangCode })

    if (exists) {
      return storagedLangCode
    }
  }

  return defaultCode
}
