'use client'

import Mainhand from '@/assets/xivicons/main_hand.svg'
import Head from '@/assets/xivicons/helmet.svg'
import Chest from '@/assets/xivicons/chest.svg'
import Hands from '@/assets/xivicons/gloves.svg'
import Legs from '@/assets/xivicons/pants.svg'
import Feet from '@/assets/xivicons/boots.svg'
import Ears from '@/assets/xivicons/earring.svg'
import Neck from '@/assets/xivicons/necklace.svg'
import Wrist from '@/assets/xivicons/bracelet.svg'
import Finger from '@/assets/xivicons/ring.svg'
import GearSelector, { ItemRarity, GearItem } from "@/components/gearselector";

const exampleItems: Array<GearItem> = [
  { id: 1, name: 'Broadblade', itemLevel: 10, rarity: ItemRarity.COMMON },
  { id: 2, name: 'Rare Blade', itemLevel: 490, rarity: ItemRarity.RARE },
  { id: 3, name: 'Flametongue', itemLevel: 500, rarity: ItemRarity.RARE },
  { id: 4, name: 'Blazefire Saber', itemLevel: 760, rarity: ItemRarity.EPIC },
]

export default function MyGear() {
  return (
    <div className="w-1/2 grid grid-flow-col grid-rows-6 justify-items-center gap-4">
      <GearSelector
        name='Main Hand'
        icon={<Mainhand />}
        items={exampleItems}
      />
      <GearSelector
        name='Head'
        icon={<Head />}
        items={exampleItems}
      />
      <GearSelector
        name='Chest'
        icon={<Chest />}
        items={exampleItems}
      />
      <GearSelector
        name='Hands'
        icon={<Hands />}
        items={exampleItems}
      />
      <GearSelector
        name='Legs'
        icon={<Legs />}
        items={exampleItems}
      />
      <GearSelector
        name='Feet'
        icon={<Feet />}
        items={exampleItems}
      />
      <div></div>
      <GearSelector
        name='Ears'
        icon={<Ears />}
        items={exampleItems}
      />
      <GearSelector
        name='Neck'
        icon={<Neck />}
        items={exampleItems}
      />
      <GearSelector
        name='Wrist'
        icon={<Wrist />}
        items={exampleItems}
      />
      <GearSelector
        name='Ring 1'
        icon={<Finger />}
        items={exampleItems}
      />
      <GearSelector
        name='Ring 2'
        icon={<Finger />}
        items={exampleItems}
      />
    </div>
  );
}
