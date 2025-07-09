'use client'

import { Select, SelectedItemProps, SelectItem } from '@heroui/react'

enum ItemRarity {
  COMMON = 'common',
  UNCOMMON = 'uncommon',
  RARE = 'rare',
  EPIC = 'epic'
}

interface GearItem {
  id: number
  name: string
  itemLevel: number
  rarity: ItemRarity
}

const exampleItems: Array<GearItem> = [
  { id: 1, name: 'Broadblade', itemLevel: 10, rarity: ItemRarity.COMMON },
  { id: 2, name: 'Rare Blade', itemLevel: 490, rarity: ItemRarity.RARE },
  { id: 3, name: 'Flametongue', itemLevel: 500, rarity: ItemRarity.RARE },
  { id: 4, name: 'Blazefire Saber', itemLevel: 760, rarity: ItemRarity.EPIC },
]

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

export default function MyGear() {
  return (
    <>
      <Select
        className='max-w-xs'
        label='Select'
        items={exampleItems}
        renderValue={(items) => {
          return items.map(item => (
            <div key={item.key} className="flex items-center gap-2">
              <div className={`flex items-center justify-between`}>
                <span>{item.data?.name}</span>
                <span>{item.data?.itemLevel}</span>
              </div>
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
    </>
  );
}
