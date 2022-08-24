import {
  Country,
  countries,
  getAlp2ByAlp3,
  getAlp2ByCountryCode,
  getAlp2ByNumericCode
} from "./data/countries"

const getCountry = (searchKey: string): Country | undefined => {
  const query = `${searchKey}`.toUpperCase()

  return (
    countries[query] ??
    getAlp2ByAlp3(query) ? countries[getAlp2ByAlp3(query)!] :
    getAlp2ByCountryCode(query) ? countries[getAlp2ByCountryCode(query)!] :
    getAlp2ByNumericCode(query) ? countries[getAlp2ByNumericCode(query)!] : undefined
  )
}

export default getCountry
