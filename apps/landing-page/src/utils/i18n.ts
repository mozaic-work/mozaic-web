export type Dict = {
  [key: string]: string | Dict
}
export type Lang = 'en-US' | 'pt-BR'

export const getOtherLanguages = (lang: Lang) => {
  return langs.filter((_lang) => _lang !== lang)
}

export const LANGS: Array<Lang> = ['en-US', 'pt-BR']

const langs: Array<Lang> = LANGS as unknown as Array<Lang>

export const otherLang = (lang: Lang) => (lang === 'en-US' ? 'pt-BR' : 'en-US')

function getFromDictionnary(
  keys: string[],
  dict: Dict | string,
): Dict | string {
  if (typeof dict === 'string') {
    return dict
  }

  if (keys.length === 0) return ''

  if (!dict) return ''

  const key = keys.shift() || ''

  return getFromDictionnary(keys, dict[key] as Dict)
}

export const _t = (key: string, dict: Dict) => {
  if (!key) return ''

  const keys = key.split('.')
  const ret = getFromDictionnary(keys, dict)

  if (!ret) return key

  if (typeof ret !== 'string') {
    console.error('getFromDict returned a ', typeof ret)
    return key
  }

  return ret // Ensure the value is returned
}
