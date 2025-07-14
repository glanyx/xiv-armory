'use client'

import { Select, SelectItem } from '@heroui/react'


export enum ItemRarity {
  COMMON = 'common',
  UNCOMMON = 'uncommon',
  RARE = 'rare',
  EPIC = 'epic'
}

export interface GearItem {
  id: number
  name: string
  itemLevel: number
  rarity: ItemRarity
}

interface GearSelectorProps {
  name?: string
  icon?: React.ReactNode
  items: Array<GearItem>
}

const getRarityColor = (rarity?: ItemRarity) => {
  switch (rarity) {
    case ItemRarity.UNCOMMON:
      return 'text-green-600'
    case ItemRarity.RARE:
      return 'text-blue-600'
    case ItemRarity.EPIC:
      return 'text-purple-600'
    default:
      return 'text-white'
  }
}

const GearSelector = ({
  name,
  icon,
  items,
}: GearSelectorProps) => {

  return (
    <div className='flex w-full justify-center'>
      <div className='flex flex-row'>
      {icon && <div className='self-end p-2 w-16 h-16'>{icon}</div>}
      <div className='w-80 grid grid-col gap-2 justify-items-start'>
        {name && <span className='m-0'>{name}</span>}
        <Select
          className='max-w-xs'
          items={items}
          renderValue={(items) => {
            return items.map(item => (
              <div key={item.key} className={`flex items-center justify-between ${getRarityColor(item.data?.rarity)}`}>
                <span>{item.data?.name}</span>
                <span>{item.data?.itemLevel}</span>
              </div>
            ))
          }}
        >
          {(item) => (
            <SelectItem key={item.id} textValue={item.name}>
              <div className={`flex items-center justify-between ${getRarityColor(item.rarity)}`}>
                <span>{item.name}</span>
                <span>{item.itemLevel}</span>
              </div>
            </SelectItem>
          )}
        </Select>
      </div>
      </div>
    </div>
  )
}

export default GearSelector