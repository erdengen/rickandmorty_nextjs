export const formatPrice = (number: number) => {
    return Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
    }).format(number)
  }
  
  export const getUniqueValues = (
    data: any,//productDataType[],
    category: any,//productDataTypeKey,
    noAllValue?: boolean
  ) => { 
    let unique = data
      .map((item: { [x: string]: any }) => item[category])
      .flat()
      .filter(Boolean)
    if (noAllValue) {
      return [...Array.from(new Set(unique))]
    }
    return ['all', ...Array.from(new Set(unique))]
  }
  
  export const sortUniqueCategoriesByFirstNumber: (
    categoryArray: string[]
  ) => string[] = categoryArray => {
    const copiedArray = [...categoryArray]
    return copiedArray.sort((a: string, b: string) => {
      return Number(a.match(/\d+/)![0]) - Number(b.match(/\d+/)![0])
    })
  }
  export const slugify = (name: string) => {
    let trMap = {
        'çÇ': 'c',
        'ğĞ': 'g',
        'şŞ': 's',
        'üÜ': 'u',
        'ıİ': 'i',
        'öÖ': 'o'
    };

    for (var key in trMap) {
        name = name.replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
    }
    return name.replace(/[^-a-zA-Z0-9\s]+/ig, '') // remove non-alphanumeric chars
        .replace(/\s/gi, "_") // convert spaces to dashes
        .replace(/[-]+/gi, "-") // trim repeated dashes
        .toLowerCase();
}