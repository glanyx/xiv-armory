'use client'

import { IItem, ItemStats } from './gearselector'

export type MainstatOptions = 'str' | 'dex' | 'int' | 'mnd'
export type SubstatOptions = 'crt' | 'dh' | 'det' | 'sps' | 'sks' | 'tnc' | 'pie'
export type StatOptions = MainstatOptions & SubstatOptions

interface StatBlockProps {
  item?: IItem
  displaySubstats?: Array<SubstatOptions>
}

const translateSubstat = {
  crt: 'Critical Hit',
  dh: 'Direct Hit Rate',
  det: 'Determination',
  sks: 'Skill Speed',
  sps: 'Spell Speed',
  tnc: 'Tenacity',
  pie: 'Piety',
}

const StatBlock = ({
  item,
  displaySubstats = [],
}: StatBlockProps) => {

  return (
    <div className='flex flex-row gap-3 items-center text-center'>
      {displaySubstats.map(stat => (
        <div key={`${item ? item.name : 'item'}-${stat}`} className='flex flex-col'>
          <span>{stat.toUpperCase()}</span>
          <span>{item && item.attr[translateSubstat[stat]] && item.attr[translateSubstat[stat]] || 0}</span>
        </div>
      ))}
    </div>
  )
}

export default StatBlock