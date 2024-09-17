import 'server-only'

import { _t, Dict, Lang } from '@/utils/i18n'

interface D {
  'en-US': () => Promise<Dict>
  'pt-BR': () => Promise<Dict>
}

const dictionaries: D = {
  'en-US': () =>
    import('./dictionaries/en-US.json').then((module) => module.default),
  'pt-BR': () =>
    import('./dictionaries/pt-BR.json').then((module) => module.default),
}

export const getDictionary = async (lang: Lang = 'en-US') =>
  (dictionaries[lang] || dictionaries['en-US'])()

export type Translator = (key: string) => string

export const getTranslations = async (lang: Lang = 'en-US') => {
  const dict = await getDictionary(lang)

  return (key: string) => _t(key, dict)
}
