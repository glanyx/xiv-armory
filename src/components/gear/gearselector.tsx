'use client'

import { useState, useEffect } from 'react'
import { Select, SelectItem } from '@heroui/react'
import StatBlock from './statblock'
import MateriaSelector from './materiaselector'

interface ApiItemResponse {
  id: string
  obj: ApiItem
  type: string
}

interface ApiItem {
  c: 'string'
  e: number
  g: number
  // item id
  i: number
  j: number
  // item level
  l: number
  // name
  n: string
  r: number
  t: number
}

export interface IItem {
  advancedMeldingForbidden: boolean
  attr: { [x: string]: number }
  attr_max: { [x: string]: number }
  category: number
  convertable: boolean
  dyeable: boolean
  dyecount: number
  elvl: number
  equip: boolean
  glamourous: boolean
  icon: string
  id: number
  ilvl: number
  jobCategories: string
  jobs: number
  models: Array<string>
  name: string
  patch: number
  patchCategory: number
  price: number
  rarity: number
  repair: number
  repair_item: number
  sharedModels: Array<number>
  slot: number
  sockets: number
  stackSize: number
  tradeShops: Array<any>
  unique: boolean
  unlistable: boolean
}

interface ItemResponse {
  item: IItem
}

export enum ItemRarity {
  COMMON = 'common',
  UNCOMMON = 'uncommon',
  RARE = 'rare',
  EPIC = 'epic'
}

export interface ItemStats {
  'Critical Hit': number
  'Direct Hit': number
  'Determination': number
  'Skill Speed': number
}

interface GearSelectorProps {
  label: string
  icon?: React.ReactNode
  // items: Array<GearItem>
  slot: ItemType
  minItemLevel: number
  maxItemLevel: number
}

const itemCategories = {
  weapon: '',
  head: '34',
  chest: '35',
  hands: '36',
  legs: '37',
  feet: '38',
  ears: '41',
  neck: '40',
  wrist: '42',
  finger: '43',
}

type ItemType = 'weapon' | 'head' | 'chest' | 'hands' | 'legs' | 'feet' | 'ears' | 'neck' | 'wrist' | 'finger'

const getRarityColor = (rarity?: number) => {
  switch (rarity) {
    case 2:
      return 'text-green-600'
    case 3:
      return 'text-blue-600'
    case 4:
      return 'text-purple-600'
    default:
      return 'text-white'
  }
}

const GearSelector = ({
  label,
  icon,
  slot,
  minItemLevel,
  maxItemLevel,
  // items,
}: GearSelectorProps) => {

  const [selected, setSelected] = useState<IItem | undefined>()

  const [data, setData] = useState<Array<ApiItemResponse>>([])

  const fetchSpecificItem = (selectedItemId: string) => {
    fetch(`https://www.garlandtools.org/db/doc/item/en/3/${selectedItemId}.json`)
      .then((res) => res.json())
      .then((data: ItemResponse) => {
        setSelected(data.item)
      })
  }

  useEffect(() => {
    fetch(`https://www.garlandtools.org/api/search.php?lang=en&ilvlMin=${minItemLevel}&ilvlMax=${maxItemLevel}&itemCategory=${itemCategories[slot]}&jobCategories=1,5,30,34,36,37,39,40,42,43,45,46,47,48,49,51,52,54,60,67,71,74,76,81,84,88,94,95,97,101,106,108,109,114,118,119,130,142,143,161,184,192,193,195`)
      .then((res) => res.json())
      .then((data: Array<ApiItemResponse>) => {
        setData(data.sort((a, b) => b.obj.l - a.obj.l))
      })
  }, [minItemLevel, maxItemLevel])
  
  return (
    <div className='flex w-180 flex-row flex-grow gap-4'>
      {icon && <div className='self-center p-2 mr-2 w-16 h-16'>{icon}</div>}
      <div className='w-full flex flex-col gap-2'>
        <div className='flex flex-row w-full gap-4'>
          <div className='w-full grid grid-col gap-2 justify-items-start'>
            <span className='m-0'>{label}</span>
            <Select
              className='max-w-s'
              aria-label={`${label}-armory-select`}
              items={data}
              size='lg'
              onSelectionChange={(selection) => selection.currentKey && fetchSpecificItem(selection.currentKey)}
              renderValue={(items) => {
                return items.map(item => (
                  <div key={item.key} className={`flex items-center justify-between ${getRarityColor(item.data?.obj.r)}`}>
                    <span>{item.data?.obj.n}</span>
                    <span>{item.data?.obj.l}</span>
                  </div>
                ))
              }}
            >
              {(item) => (
                <SelectItem key={item.id} textValue={item.obj.n}>
                  <div className={`flex items-center justify-between ${getRarityColor(item.obj.r)}`}>
                    <span>{item.obj.n}</span>
                    <span>{item.obj.l}</span>
                  </div>
                </SelectItem>
              )}
            </Select>
          </div>
          <StatBlock
            item={selected}
            displaySubstats={['crt', 'det', 'dh', 'sks']}
          />
        </div>
        <div className='flex flex-row gap-2 h-10'>
          {selected && Array.from(Array(selected.advancedMeldingForbidden ? selected.sockets : 5)).map((_, index) => <MateriaSelector key={`${selected?.name}-materia${index}`} />)}
        </div>
      </div>
    </div>
  )
}

export default GearSelector