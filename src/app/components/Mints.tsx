'use client'

import useGetMints from "../hooks/useGetMints"
import Image from "next/image"

export default function Mints(){
  const { mints, loading } = useGetMints()

  console.log(mints)

  return (
    <div className="columns-3">
      {
        mints?.map((mint) => (
          <div className="mb-2" key={mint.id}>
            {/*<div className="w-48">{mint.tokenAndContract.metadata?.name}</div> */}           
            <div className="">
              <Image
                src={`https://magic.decentralized-content.com/ipfs/${mint.tokenAndContract.metadata?.image.substring(7)}?w=150`}
                alt={mint.id}
                width={150}
                height={150}
                className=" w-50"
              />
            </div>

          </div>
        ))
      }
    </div>
  )
}