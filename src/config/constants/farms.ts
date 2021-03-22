import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'CITA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xC4E0876cb1547acb5a109Edf056aB888422295Ec',
    },
    tokenSymbol: 'CITA',
    tokenAddresses: {
      97: '',
      56: '0xafa2219bc6998575d2e5fd3ee602ead4ca9d7a65',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'CITA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xcc9056208f5b1944a7eea50bec039333524635a7',
    },
    tokenSymbol: 'CITA',
    tokenAddresses: {
      97: '',
      56: '0xafa2219bc6998575d2e5fd3ee602ead4ca9d7a65',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'CITA',
    lpAddresses: {
      97: '',
      56: '0xC4E0876cb1547acb5a109Edf056aB888422295Ec', // CITA-BUSD LP
    },
    tokenSymbol: 'CITA',
    tokenAddresses: {
      97: '',
      56: '0xafa2219bc6998575d2e5fd3ee602ead4ca9d7a65',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 
]

export default farms