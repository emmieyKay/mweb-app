
const logoBaseURL = "https://www.mweb.co.za/media/images/providers"
export const campaignsURL = "https://apigw.mweb.co.za/prod/baas/proxy/marketing/campaigns/fibre?channels=120&visibility=public"
export const baseURL = "https://apigw.mweb.co.za/prod/baas/proxy"

export const providerInfo = [
    {
        code: 'centurycity',
        name: 'Century City Connect',
        url: `${logoBaseURL}/provider-century.png`
    },
    {
        code: 'evotel',
        name: 'Evotel',
        url: `${logoBaseURL}/provider-evotel.png`
    },
    {
        code: 'octotel',
        name: 'Octotel',
        url: `${logoBaseURL}/provider-octotel.png`
    },
    {
        code: 'vumatel',
        name: 'Vumatel',
        url: `${logoBaseURL}/provider-vuma.png`
    },
    {
        code: 'openserve',
        name: 'Openserve',
        url: `${logoBaseURL}/provider-openserve.png`
    },
    {
        code: 'frogfoot',
        name: 'Frogfoot',
        url: `${logoBaseURL}/provider-frogfoot.png`
    },
    {
        code: 'mfn',
        name: 'MFN',
        url: `${logoBaseURL}/provider-metrofibre.png`
    },
    {
        code: 'vodacom',
        name: 'Vodacom',
        url: `${logoBaseURL}/provider-vodacom.png`
    },
    {
        code: 'linkafrica',
        name: 'Link Africa',
        url: `${logoBaseURL}/provider-linkafrica.png`
    },
    {
        code: 'linklayer',
        name: 'Link Layer',
        url: `${logoBaseURL}/provider-link-layer.png`
    },
    {
        code: 'lightstruck',
        name: 'Lightstruck',
        url: `${logoBaseURL}/provider-lightstruck.png`
    },
    {
        code: 'mitchells',
        name: 'Mitchells Fibre',
        url: `${logoBaseURL}/provider-mitchells.png`
    },
    {
        code: 'vumareach',
        name: 'Vuma Reach',
        url: `${logoBaseURL}/provider-vuma.png`
    }
]
export const priceRanges = [
    { min: 0, max: 699, label: 'R0 - R699' },
    { min: 700, max: 999, label: 'R700 - R999' },
    { min: 1000, max: 9999, label: 'R1000+' }]