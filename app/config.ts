const BUSINESS_PARTNER_URLS = {
    production: 'https://bisnispartner.masteronline.co.id',
    development: 'https://devbisnis.masteronline.co.id',
    default: 'https://devbisnis.masteronline.co.id',
}

const IMAGE_BASEURLS = {
    production: '/landing-page',
    development: '/landing-page',
    default: '',
}

export const IMAGE_BASEURL = IMAGE_BASEURLS[process.env.STAGE as keyof typeof IMAGE_BASEURLS] || IMAGE_BASEURLS.default
export const BUNINESS_PARTNER_URL = BUSINESS_PARTNER_URLS[process.env.STAGE as keyof typeof BUSINESS_PARTNER_URLS] || BUSINESS_PARTNER_URLS.default