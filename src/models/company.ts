interface WebSettings {
  id: number | null
  venueId?: number | null
  bannerImage?: string | null
  backgroundColour?: string | null
  primaryColour?: string | null
  primaryColourHover: string | null
  navBackgroundColour: string | null
}

export interface CompanyModel {
  id: number | null
  name: string | null
  internalName: string | null
  description?: string | null
  liveFlag: number | null
  demoFlag: number | null
  address1: string | null
  address2: string | null
  address3?: string | null
  city: string | null
  county: string | null
  postcode: string | null
  country: string | null
  timezoneOffset: string | null
  locale: string | null
  timeZone: string | null
  webSettings: WebSettings | null
  ccy: string | null
  ccySymbol: string | null
  currency: string | null
}
