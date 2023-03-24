const docLangCodeMapping: Record<string, string> = {
  it: 'italian',
  ja: 'japanese',
  fr: 'french',
  tr: 'turkish',
  vi: 'vietnamese',
  id: 'indonesian',
  'zh-cn': 'chinese',
  'pt-br': 'portuguese-brazilian',
}

export const getDocLink = (code: string) =>
  docLangCodeMapping[code]
    ? `https://migoswap.gitbook.io/migodoc/v/${docLangCodeMapping[code]}/get-started/connection-guide`
    : `https://migoswap.gitbook.io/migodoc/get-started/connection-guide`
