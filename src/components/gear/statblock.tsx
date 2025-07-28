'use client'

import { ItemWithMateria, translateSubstat } from '@/types/gear'

export type MainstatOptions = 'str' | 'dex' | 'int' | 'mnd'
export type SubstatOptions = 'crt' | 'dh' | 'det' | 'sps' | 'sks' | 'tnc' | 'pie'
export type StatOptions = MainstatOptions & SubstatOptions

interface StatBlockProps {
  equipment?: ItemWithMateria
  displaySubstats?: Array<SubstatOptions>
}

const StatBlock = ({
  equipment,
  displaySubstats = [],
}: StatBlockProps) => {

  return (
    <div className='flex flex-row gap-3 items-center text-center'>
      {displaySubstats.map(stat => (
        <div key={`${equipment ? equipment.item.name : 'item'}-${stat}`} className='flex flex-col'>
          <span>{stat.toUpperCase()}</span>
          <span>{equipment && equipment.item.attr[translateSubstat[stat]] && equipment.item.attr[translateSubstat[stat]] || 0}</span>
        </div>
      ))}
    </div>
  )
}

export default StatBlock