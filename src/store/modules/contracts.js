const state = {
  wtIdxAddr: '0xc3c9d8c689de60aac16981bf942ab68dcad2cf34',
  wtIdxCnt: [
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'hotelsByManagerIndex',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'version',
      'outputs': [
        {
          'name': '',
          'type': 'bytes32'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'LifToken',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [],
      'name': 'renounceOwnership',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        },
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'name': 'hotelsByManager',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'owner',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'hotelsIndex',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'contractType',
      'outputs': [
        {
          'name': '',
          'type': 'bytes32'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'name': 'hotels',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': '_newOwner',
          'type': 'address'
        }
      ],
      'name': 'transferOwnership',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'name': 'hotel',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'managerIndex',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'name': 'allIndex',
          'type': 'uint256'
        }
      ],
      'name': 'HotelRegistered',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'name': 'hotel',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'managerIndex',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'name': 'allIndex',
          'type': 'uint256'
        }
      ],
      'name': 'HotelDeleted',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'name': 'hotel',
          'type': 'address'
        }
      ],
      'name': 'HotelCalled',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'name': 'hotel',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'previousManager',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'newManager',
          'type': 'address'
        }
      ],
      'name': 'HotelTransferred',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': 'previousOwner',
          'type': 'address'
        }
      ],
      'name': 'OwnershipRenounced',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': 'previousOwner',
          'type': 'address'
        },
        {
          'indexed': true,
          'name': 'newOwner',
          'type': 'address'
        }
      ],
      'name': 'OwnershipTransferred',
      'type': 'event'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': '_LifToken',
          'type': 'address'
        }
      ],
      'name': 'setLifToken',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'dataUri',
          'type': 'string'
        }
      ],
      'name': 'registerHotel',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'hotel',
          'type': 'address'
        }
      ],
      'name': 'deleteHotel',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'hotel',
          'type': 'address'
        },
        {
          'name': 'data',
          'type': 'bytes'
        }
      ],
      'name': 'callHotel',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'hotel',
          'type': 'address'
        },
        {
          'name': 'newManager',
          'type': 'address'
        }
      ],
      'name': 'transferHotel',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'getHotelsLength',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'getHotels',
      'outputs': [
        {
          'name': '',
          'type': 'address[]'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': 'manager',
          'type': 'address'
        }
      ],
      'name': 'getHotelsByManager',
      'outputs': [
        {
          'name': '',
          'type': 'address[]'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    }
  ],
  mrcIdxAddr: '0xacd73a9ae5eeffd0bb6532f473e5923692b519d6',
  mrcIdxCnt: [
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'name': 'merchantList',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': '_merchantName',
          'type': 'string'
        },
        {
          'name': '_registrationNumber',
          'type': 'string'
        }
      ],
      'name': 'registerMerchant',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'getMerchantListByOwner',
      'outputs': [
        {
          'name': '',
          'type': 'address[]'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '_merchantAddress',
          'type': 'address'
        }
      ],
      'name': 'getMerchantContractListForMerchant',
      'outputs': [
        {
          'name': '',
          'type': 'address[]'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'getMerchantListLength',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    }
  ],
  mrcCnt: [
    {
      'constant': true,
      'inputs': [],
      'name': 'name',
      'outputs': [
        {
          'name': '',
          'type': 'string'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'owner',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'registrationNumber',
      'outputs': [
        {
          'name': '',
          'type': 'string'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'name': '_owner',
          'type': 'address'
        },
        {
          'name': '_name',
          'type': 'string'
        },
        {
          'name': '_registrationNumber',
          'type': 'string'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    }
  ],
  finInsIdxAddr: '0x25e755aacb04bf0d0faabc8b827a751906c2890e',
  finInsIdxCnt: [
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'name': 'paymentProviderList',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': '_legalInformation',
          'type': 'bytes32[]'
        }
      ],
      'name': 'registerPaymentProvider',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'getPaymentProviderListByOwner',
      'outputs': [
        {
          'name': '',
          'type': 'address[]'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'getPaymentProviderListLength',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    }
  ],
  finInsCnt: [
    {
      'constant': true,
      'inputs': [],
      'name': 'legalInformation',
      'outputs': [
        {
          'name': 'name',
          'type': 'string'
        },
        {
          'name': 'registrationNumber',
          'type': 'string'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'name': '_owner',
          'type': 'address'
        },
        {
          'name': '_legalInformation',
          'type': 'bytes32[]'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    }
  ],
  mrcAgrIdxAddr: '0x15412575e159c13ff93097ac8335db40982ca83e',
  mrcAgrIdxCnt: [
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'name': 'merchantAgreementList',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'name': '_merchant',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': '_merchantAgreementAddress',
          'type': 'address'
        }
      ],
      'name': 'MerchantAgreementRequested',
      'type': 'event'
    },
    {
      'constant': false,
      'inputs': [],
      'name': 'registerMerchantAgreement',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': '_provider',
          'type': 'address'
        },
        {
          'name': '_fee',
          'type': 'uint256'
        },
        {
          'name': '_merchantAgreementContractAddress',
          'type': 'address'
        }
      ],
      'name': 'providerProposal',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'getMerchantAgreementList',
      'outputs': [
        {
          'name': '',
          'type': 'address[]'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'getMerchantAgreementListLength',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '_merchant',
          'type': 'address'
        }
      ],
      'name': 'getMerchantAgreementsOfMerchant',
      'outputs': [
        {
          'name': '',
          'type': 'address[]'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '_provider',
          'type': 'address'
        }
      ],
      'name': 'getMerchantAgreementsOfProvider',
      'outputs': [
        {
          'name': '',
          'type': 'address[]'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '_merchant',
          'type': 'address'
        },
        {
          'name': '_provider',
          'type': 'address'
        }
      ],
      'name': 'getMerchantAgreementsByProvider',
      'outputs': [
        {
          'name': '',
          'type': 'address[]'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '_provider',
          'type': 'address'
        },
        {
          'name': '_merchant',
          'type': 'address'
        }
      ],
      'name': 'getMerchantAgreementsByMerchant',
      'outputs': [
        {
          'name': '',
          'type': 'address[]'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    }
  ],
  mrcAgrCnt: [
    {
      'constant': true,
      'inputs': [],
      'name': 'provider',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'merchant',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'state',
      'outputs': [
        {
          'name': '',
          'type': 'uint8'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'fee',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'name': '_merchant',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'name': '_merchant',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': '_provider',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': '_fee',
          'type': 'uint256'
        }
      ],
      'name': 'MerchantAgreementProposal',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'name': '_merchant',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': '_provider',
          'type': 'address'
        }
      ],
      'name': 'MerchantAgreementAcceptance',
      'type': 'event'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': '_provider',
          'type': 'address'
        },
        {
          'name': '_fee',
          'type': 'uint256'
        }
      ],
      'name': 'providerProposed',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [],
      'name': 'merchantAccepted',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'getState',
      'outputs': [
        {
          'name': '',
          'type': 'uint8'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'getData',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        },
        {
          'name': '',
          'type': 'address'
        },
        {
          'name': '',
          'type': 'uint8'
        },
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    }
  ]
}

const getters = {
  getWtIdxAddr: (state) => {
    return state.wtIdxAddr
  },
  getWtIdxCnt: (state) => {
    return state.wtIdxCnt
  },
  getMrcIdxAddr: (state) => {
    return state.mrcIdxAddr
  },
  getMrcIdxCnt: (state) => {
    return state.mrcIdxCnt
  },
  getMrcCnt: (state) => {
    return state.mrcCnt
  },
  getFinInsIdxAddr: (state) => {
    return state.finInsIdxAddr
  },
  getFinInsIdxCnt: (state) => {
    return state.finInsIdxCnt
  },
  getFinInsCnt: (state) => {
    return state.finInsCnt
  },
  getMrcAgrIdxAddr: (state) => {
    return state.mrcAgrIdxAddr
  },
  getMrcAgrIdxCnt: (state) => {
    return state.mrcAgrIdxCnt
  },
  getMrcAgrCnt: (state) => {
    return state.mrcAgrCnt
  }
}

export default {
  namespaced: true,
  state,
  getters
}
