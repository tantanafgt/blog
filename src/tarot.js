console.log("Hey, we're in JS land now!")

const strings = {
  none: {
    en_AU: "None",
    ja_JP: "無し",
  },
  card: {
    arcana: {
      en_AU: "arcana",
      ja_JP: "アルカナ",
    },
    suits: {
      en_AU: "Suits",
      ja_JP: "スート",
    },
    keywords: {
      en_AU: "Keywords",
      ja_JP: "キーワード",
    },
    element: {
      en_AU: "Element",
      ja_JP: "エレメント",
    },
    numerology: {
      en_AU: "Numerology",
      ja_JP: "数秘術",
    },
    astrology: {
      en_AU: "Astrology",
      ja_JP: "占星術",
    },
    rulingPlanet: {
      en_AU: "Ruling Planet",
      ja_JP: "支配惑星",
    },
    rulingZodiac: {
      en_AU: "Ruling Zodiac",
      ja_JP: "支配星座",
    },
    pathwayNum: {
      en_AU: "Pathway Number",
      ja_JP: "パスウェイ",
    },
    pathwayStart: {
      en_AU: "Pathway Start",
      ja_JP: "パスウェイ始まり",
    },
    pathwayEnd: {
      en_AU: "Pathway End",
      ja_JP: "パスウェイ終わり",
    },
    hebrewLetter: {
      en_AU: "Hebrew Letter",
      ja_JP: "ヘブライ文字",
    },
    hebrewLetterType: {
      en_AU: "Hebrew Letter Type",
      ja_JP: "ヘブライ文字のタイプ",
    },
    hebrewLetterSymbol: {
      en_AU: "Hebrew Letter Symbol",
      ja_JP: "ヘブライ文字の象徴",
    },
    hebrewLetterMeaning: {
      en_AU: "Hebrew Letter Meaning",
      ja_JP: "ヘブライ文字の意味",
    },
    musicalNote: {
      en_AU: "Musical Note",
      ja_JP: "音階",
    },
    colour: {
      en_AU: "Colour",
      ja_JP: "色",
    },
    sephirot: {
      en_AU: "Sephirot",
      ja_JP: "セフィロト",
    },
  }
}

const sampleMajorCard = {
  art: {
    thumb: '00-fool.jpg',
    full: '00-fool.jpg',
    alt: 'Photo of RWS card "The Fool" in full colour.',
  },
  number: 0,
  name: {
    en_AU: "The Fool",
    ja_JP: "愚者",
  },
  arcana: {
    en_AU: "Major",
    ja_JP: "メジャー",
  },
  suits: [],
  keywords: {
    en_AU: ["Beginnings", "Innocence", "Clear Conscience", "Risk"],
    ja_JP: ["始まり", "純粋", "リスク"],
  },
  element: {
    en_AU: "air",
    ja_JP: "エアー",
  },
  numerology: [0],
  astrology: {
    en_AU: "Air(Uranus)",
    ja_JP: "エアー(ウラヌス)",
  },

  pathwayNum: [1],
  pathwayStart: {
    en_AU: "Kether",
    ja_JP: "ケサー",
  },
  pathwayEnd: {
    en_AU: "Chockma",
    ja_JP: "コクマ",
  },
  hebrewLetter: {
    en_AU: "Aleph ",
    ja_JP: "アレフ",
  },
  hebrewLetterType: {
    en_AU: "Mother",
    ja_JP: "マザー",
  },
  hebrewLetterSymbol: {
    en_AU: "The Ox ",
    ja_JP: "牛",
  },
  hebrewLetterMeaning: {
    en_AU: "Instinct",
    ja_JP: "直感",
  },
  musicalNote: ["E"],
  colour: {
    en_AU: "Yellow",
    ja_JP: "イエロー",
  },
}

const sampleMinorCard = {
  art: {
    thumb: '00-fool.jpg',
    full: '00-fool.jpg',
    alt: 'Photo of RWS card "The Fool" in full colour.',
  },
  name: {
    en_AU: "The Fool",
    ja_JP: "愚者",
  },
  arcana: {
    en_AU: "Major",
    ja_JP: "メジャー",
  },
  suits: [],
  keywords: {
    en_AU: ["Beginnings", "Innocence", "Clear Conscience", "Risk"],
    ja_JP: ["始まり", "純粋", "リスク"],
  },
  element: {
    en_AU: "air",
    ja_JP: "エアー",
  },
  numerology: [0],
  astrology: {
    en_AU: "Air(Uranus)",
    ja_JP: "エアー(ウラヌス)",
  },

  pathwayNum: [1],
  sephirot: {
    en_AU: "Kether",
    ja_JP: "ケサー",
  },

}

renderMajorSample = () => {
  const card = sampleMajorCard
  console.log("A card:", card)

  // const lang = 'en_AU'
  const lang = 'ja_JP'

  const renderFieldDiv = (fieldName, localiseValue = true) => {
    const cardValue = localiseValue ? card[fieldName][lang] : card[fieldName]
    const value = Array.isArray(cardValue) && cardValue.length == 0
      ? strings.none[lang]
      : cardValue

    return `<div>${strings.card[fieldName][lang]}: ${value}</div>`
  }

  return `<div class="card">
    <img src="images/rws/thumb/${card.art.thumb}" alt="${card.art.alt}"/>
    <div class="title">${card.number}: ${card.name[lang]}</div>
    ${renderFieldDiv('arcana')}
    <hr/>
    ${renderFieldDiv('keywords')}
    ${renderFieldDiv('element')}
    ${renderFieldDiv('numerology', false)}
    ${renderFieldDiv('astrology')}
    ${renderFieldDiv('pathwayNum', false)}
    <div>Pathway: Between ${card.pathwayStart[lang]} and ${card.pathwayEnd[lang]}</div>
    ${renderFieldDiv('hebrewLetter')}
    ${renderFieldDiv('hebrewLetterType')}
    ${renderFieldDiv('hebrewLetterSymbol')}
    ${renderFieldDiv('hebrewLetterMeaning')}
    ${renderFieldDiv('musicalNote', false)}
    ${renderFieldDiv('colour')}
  </div>`
}

renderMinorSample = () => {
  const card = sampleMinorCard
  console.log("A card:", card)
  // const lang = 'en_AU'
  const lang = 'ja_JP'

  const renderFieldDiv = (fieldName, localiseValue = true) => {
    const cardValue = localiseValue ? card[fieldName][lang] : card[fieldName]
    const value = Array.isArray(cardValue) && cardValue.length == 0
      ? strings.none[lang]
      : cardValue

    return `<div>${strings.card[fieldName][lang]}: ${value}</div>`
  }

  return `<div class="card">
    <img src="images/rws/thumb/${card.art.thumb}" alt="${card.art.alt}"/>
    <div class="title"> ${card.name[lang]}</div>
    ${renderFieldDiv('arcana')}
    <hr/>
    ${renderFieldDiv('keywords')}
    ${renderFieldDiv('element')}
    ${renderFieldDiv('numerology', false)}
    ${renderFieldDiv('astrology')}
    ${renderFieldDiv('sephirot')}


  </div>`
}
