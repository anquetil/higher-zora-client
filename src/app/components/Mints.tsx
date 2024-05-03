'use client'

import useGetMints from "../hooks/useGetMints"
import Image from "next/image"

export default function Mints(){
  const { mints, loading } = useGetMints()

  console.log(mints)

  return (
    <div>
      {
        mints?.map((mint) => (
          <div key={mint.id}>
            <div>{mint.tokenAndContract.metadata?.name}</div>
            <Image 
              src={`https://magic.decentralized-content.com/ipfs/${mint.tokenAndContract.metadata?.image.substring(7)}`}
               alt={mint.id} 
               width={50}
               height={50}
               className=" w-50"
               
               />
          </div>
        ))
      }
    </div>
  )
}