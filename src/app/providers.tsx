'use client'

import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: "https://api.goldsky.com/api/public/project_clhk16b61ay9t49vm6ntn4mkz/subgraphs/zora-create-base-mainnet/stable/gn",
  cache: new InMemoryCache(),
})

/*

const { chains, publicClient } = configureChains(
  [chain],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID ?? '' }),
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'PropDates',
  projectId: '023cdeb533db1bcd5a099bf4677e0808',
  chains,
})

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

*/

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
      <ApolloProvider client={client}>
        {mounted && children}
      </ApolloProvider>
  )
}


/*
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <WagmiConfig config={wagmiConfig}>
          //<RainbowKitProvider chains={chains} initialChain={mainnet}>
            {mounted && children}
            <Analytics />
          </RainbowKitProvider>
        </WagmiConfig>
      </ApolloProvider>
    </QueryClientProvider>
*/