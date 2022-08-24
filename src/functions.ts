import {
  Country,
  countries
} from './data/countries'

const getAlp2ByAlp3 = (alp3: string) => {
  return Object.values(countries).find((country) => country.alp3 === alp3)?.alp2
}

const getAlp2ByCountryCode = (countryCode: string) => {
  return Object.values(countries).find((country) => country.countryCode === countryCode)?.alp2
}

const getAlp2ByNumericCode = (numericCode: string) => {
  return Object.values(countries).find((country) => country.numericCode === numericCode)?.alp2
}

const getCountry = (searchKey: string): Country | undefined => {
  const query = `${searchKey}`.toUpperCase()

  return (
    countries[query] ??
    getAlp2ByAlp3(query) ? countries[getAlp2ByAlp3(query)!] :
    getAlp2ByCountryCode(query) ? countries[getAlp2ByCountryCode(query)!] :
    getAlp2ByNumericCode(query) ? countries[getAlp2ByNumericCode(query)!] : undefined
  )
}

export { getCountry }
