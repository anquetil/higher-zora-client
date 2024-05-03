import { gql, useQuery } from '@apollo/client'
import { Address } from 'viem'

export function useGetMints() {
  const query = gql`query{
  salesStrategyConfigs(
    where: {
      erc20Minter_: {
        currency: "0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe"
      }
    }
  ) {
    id
    tokenAndContract{
      address
      creator
			tokenId
      metadata{
        image
        name
      }
    }
  }
}`

  const { data, loading } = useQuery(query, {
    //skip: !enabled,
  })

  const mints: {
    id: string,
    tokenAndContract: {
      address: Address,
      creator: Address,
      tokenId: number,
      metadata: {
        image: string
        name: string,
      }
    },
    erc20Minter: {
      saleEnd: number
    }
  }[] = data ? data.salesStrategyConfigs : undefined

  console.log(mints)

  return {
    mints,
    loading,
  }
}

export default useGetMints