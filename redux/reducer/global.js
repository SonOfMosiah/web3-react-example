import get from 'lodash/get'

export default (state = {
  innerHeight: 0,
  innerWidth: 0,
  modal: {
    active: false,
    title: '',
    size: 'lg',
    hideClose: false,
    component: ''
  },
  currentAccount: '',
  prohibitedCountry: false,
  currentNetwork: {},
  network: {
    ethereum: {
      endpoint: 'https://eth-mainnet.alchemyapi.io/v2/gIT3K5wk0SucduLPA9tWVq8Tpzve3rOP',
      contracts: {
        router: '',
        alta: '0xe0cCa86B254005889aC3a81e737f56a14f4A38F5',
        earn: '0xaaaaaa7a1cff5a1e91d57f4a2c8f8dfc9c60116c'
      },
      services: {
        earn: true
      }
    },
    ropsten: {
      endpoint: 'https://eth-ropsten.alchemyapi.io/v2/Ccd8YRqESc3UtPLQht0Bf1G4eoa_wirz',
      contracts: {
        router: '',
        alta: '0xe0cCa86B254005889aC3a81e737f56a14f4A38F5',
        earn: '0xaaaaaa7a1cff5a1e91d57f4a2c8f8dfc9c60116c'
      },
      services: {
        earn: true
      }
    },
    rinkeby: {
      endpoint: 'https://eth-ropsten.alchemyapi.io/v2/gIT3K5wk0SucduLPA9tWVq8Tpzve3rOP',
      contracts: {
        router: '',
        alta: '0xe0cCa86B254005889aC3a81e737f56a14f4A38F5',
        earn: ''
      },
      services: {
        earn: false
      }
    },
    kovan: {
      endpoint: 'https://eth-ropsten.alchemyapi.io/v2/gIT3K5wk0SucduLPA9tWVq8Tpzve3rOP',
      contracts: {
        router: '',
        alta: '0xe0cCa86B254005889aC3a81e737f56a14f4A38F5',
        earn: ''
      },
      services: {
        earn: false
      }
    },
    goerli: {
      endpoint: 'https://eth-ropsten.alchemyapi.io/v2/gIT3K5wk0SucduLPA9tWVq8Tpzve3rOP',
      contracts: {
        router: '',
        alta: '0xe0cCa86B254005889aC3a81e737f56a14f4A38F5',
        earn: ''
      },
      services: {
        earn: true
      }
    },
    polygon: {
      endpoint: 'https://polygon-mainnet.g.alchemy.com/v2/gIT3K5wk0SucduLPA9tWVq8Tpzve3rOP',
      contracts: {
        router: '',
        alta: '0xe0cCa86B254005889aC3a81e737f56a14f4A38F5',
        earn: '0xaaaaaa7a1cff5a1e91d57f4a2c8f8dfc9c60116c'
      },
      services: {
        earn: true
      }
    },
    mumbai: {
      endpoint: 'https://polygon-mumbai.g.alchemy.com/v2/gIT3K5wk0SucduLPA9tWVq8Tpzve3rOP',
      contracts: {
        router: '',
        alta: '0xe0cCa86B254005889aC3a81e737f56a14f4A38F5',
        earn: ''
      },
      services: {
        earn: true
      }
    },
    bsc: {
      endpoint: null,
      contracts: {
        router: '',
        alta: '',
        earn: ''
      },
      services: {
        earn: false
      }
    },
    avalanche: {
      endpoint: null,
      contracts: {
        router: '',
        alta: '0xe0cCa86B254005889aC3a81e737f56a14f4A38F5',
        earn: ''
      },
      services: {
        earn: false
      }
    },
    arbitrum: {
      endpoint: null,
      services: {
        earn: false
      }
    },
    optimism: {
      endpoint: null,
      services: {
        earn: false
      }
    },
    stacks: {
      endpoint: null,
      services: {
        earn: false
      }
    },
    solana: {
      endpoint: null,
      services: {
        earn: false
      }
    }
  },
  assets: {
    '0xe0cCa86B254005889aC3a81e737f56a14f4A38F5': {
      logo: '/tokens/0xe0cCa86B254005889aC3a81e737f56a14f4A38F5.png',
      name: 'Alta Finance',
      ticker: 'ALTA',
      network: [1,3,137,43114,56]
    },
    '0xaD6D458402F60fD3Bd25163575031ACDce07538D': {
      logo: '/tokens/0xaD6D458402F60fD3Bd25163575031ACDce07538D.png',
      name: 'Dai',
      ticker: 'DAI',
      network: [3]
    },
    '0x07865c6E87B9F70255377e024ace6630C1Eaa37F': {
      logo: '/tokens/0x07865c6E87B9F70255377e024ace6630C1Eaa37F.png',
      name: 'USD Coin',
      ticker: 'USDC',
      network: [3]
    },
    '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063': {
      logo: '/tokens/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063.png',
      name: 'Dai',
      ticker: 'DAI',
      network: [137]
    },
    '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70': {
      logo: '/tokens/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70.png',
      name: 'Dai',
      ticker: 'DAI',
      network: [43114]
    },
    '0x6B175474E89094C44Da98b954EedeAC495271d0F': {
      logo: '/tokens/0x6B175474E89094C44Da98b954EedeAC495271d0F.png',
      name: 'Dai',
      ticker: 'DAI',
      network: [1]
    },
    '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174': {
      logo: '/tokens/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174.png',
      name: 'USD Coin',
      ticker: 'USDC',
      network: [137]
    },
    '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89': {
      logo: '/tokens/0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89.png',
      name: 'Frax',
      ticker: 'FRAX',
      network: [137]
    },
    '0xc2132D05D31c914a87C6611C10748AEb04B58e8F': {
      logo: '/tokens/0xc2132D05D31c914a87C6611C10748AEb04B58e8F.png',
      name: 'Tether USD',
      ticker: 'USDT',
      network: [137]
    },
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': {
      logo: '/tokens/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48.png',
      name: 'USD Coin',
      ticker: 'USDC',
      network: [1]
    },
    '0x853d955aCEf822Db058eb8505911ED77F175b99e': {
      logo: '/tokens/0x853d955aCEf822Db058eb8505911ED77F175b99e.png',
      name: 'Frax',
      ticker: 'FRAX',
      network: [1]
    },
    '0xdAC17F958D2ee523a2206206994597C13D831ec7': {
      logo: '/tokens/0xdAC17F958D2ee523a2206206994597C13D831ec7.png',
      name: 'Tether USD',
      ticker: 'USDT',
      network: [1]
    },
    '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E': {
      logo: '/tokens/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E.png',
      name: 'USD Coin',
      ticker: 'USDC',
      network: [43114]
    },
    '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7': {
      logo: '/tokens/0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7.png',
      name: 'Tether USD',
      ticker: 'USDT',
      network: [43114]
    },
    '0xDC42728B0eA910349ed3c6e1c9Dc06b5FB591f98': {
      logo: '/tokens/0xDC42728B0eA910349ed3c6e1c9Dc06b5FB591f98.png',
      name: 'Frax',
      ticker: 'FRAX',
      network: [43114]
    }
  }
}, action) => {
  const { payload, type } = action
  switch (type) {
    case 'HYDRATE': {
      if (payload.app === 'init') delete action.payload.app
      if (payload.page === 'init') delete action.payload.page
      return {...state}
    }
    case 'SET_CURRENT_ACCOUNT': {
      const {
        currentAccount
      } = payload
      const current = `network.${currentAccount.provider}`
      const currentNetwork = get(state, `${current}`)
      let address = currentAccount.account
      switch (true) {
        case get(currentAccount, 'account', '').length === 42: {
          address = address.substring(0, 5) + '...' + address.slice(currentAccount.account.length - 4)
          break
        }
        case get(currentAccount, 'account', '').length === 44: {
          address = address.substring(0, 5) + '...' + address.slice(currentAccount.account.length - 4)
          break
        }
        default: {}
      }
      return {
        ...state,
        currentAccount: {
          account: address,
          provider: currentAccount.provider
        },
        currentNetwork
      }
    }
    case 'CALCULATE_BROWSER_SIZE': {
      var h = (window.innerHeight)
      var w = (window.innerWidth)
      return { ...state, innerHeight: h, innerWidth: w }
    }
    case 'OPEN_MODAL': {
      const payload = action.payload
      const {
        title,
        component
      } = payload
      return {
        ...state,
        modal: {
          active: true,
          title: title,
          size: get(payload, 'size', state.modal.size),
          hideClose: get(payload, 'hideClose', state.modal.hideClose),
          component: component
        }
      }
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        modal: {
          active: false,
          title: '',
          size: 'lg',
          component: ''
        }
      }
    }
    case 'UPDATE_PROHIBITED_COUNTRY': {
      const payload = action.payload
      const {
        country
      } = payload
      return {
        ...state,
        prohibitedCountry: country
      }
    }
    default: return state
  }
}
