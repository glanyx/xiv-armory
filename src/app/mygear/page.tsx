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
import GearSelector from "@/components/gear/gearselector";

// const exampleItems: Array<GearItem> = [
//   { id: 1, name: 'Broadblade', itemLevel: 10, rarity: 1, stats: { crit: 5, directhit: 0, det: 2, sks: 0 }, materiaSlots: 0 },
//   { id: 2, name: 'Crafted Blade', itemLevel: 480, rarity: 2, stats: { crit: 156, directhit: 121, det: 0, sks: 0 }, materiaSlots: 5 },
//   { id: 3, name: 'Rare Blade', itemLevel: 495, rarity: 3, stats: { crit: 156, directhit: 121, det: 0, sks: 0 }, materiaSlots: 2 },
//   { id: 4, name: 'Ultimate Flametongue', itemLevel: 535, rarity: 3, stats: { crit: 131, directhit: 0, det: 0, sks:166 }, materiaSlots: 3 },
//   { id: 5, name: 'Blazefire Saber', itemLevel: 765, rarity: 4, stats: { crit: 255, directhit: 311, det: 255, sks: 0 }, materiaSlots: 2 },
// ]

export default function MyGear() {
  return (
    <div className="w-1/2 grid xl:grid-flow-col xs:grid-col xl:grid-rows-6 justify-center gap-4">
      <GearSelector
        label='Main Hand'
        icon={<Mainhand />}
        slot='weapon'
        minItemLevel={700}
        maxItemLevel={760}
        // items={exampleItems}
      />
      <GearSelector
        label='Head'
        icon={<Head />}
        slot='head'
        minItemLevel={700}
        maxItemLevel={760}
        // items={exampleItems}
      />
      <GearSelector
        label='Chest'
        icon={<Chest />}
        slot='chest'
        minItemLevel={700}
        maxItemLevel={760}
        // items={exampleItems}
      />
      <GearSelector
        label='Hands'
        icon={<Hands />}
        slot='hands'
        minItemLevel={700}
        maxItemLevel={760}
        // items={exampleItems}
      />
      <GearSelector
        label='Legs'
        icon={<Legs />}
        slot='legs'
        minItemLevel={700}
        maxItemLevel={760}
        // items={exampleItems}
      />
      <GearSelector
        label='Feet'
        icon={<Feet />}
        slot='feet'
        minItemLevel={700}
        maxItemLevel={760}
        // items={exampleItems}
      />
      <div className='' />
      <GearSelector
        label='Ears'
        icon={<Ears />}
        slot='ears'
        minItemLevel={700}
        maxItemLevel={760}
        // items={exampleItems}
      />
      <GearSelector
        label='Neck'
        icon={<Neck />}
        slot='neck'
        minItemLevel={700}
        maxItemLevel={760}
        // items={exampleItems}
      />
      <GearSelector
        label='Wrist'
        icon={<Wrist />}
        slot='wrist'
        minItemLevel={700}
        maxItemLevel={760}
        // items={exampleItems}
      />
      <GearSelector
        label='Ring 1'
        icon={<Finger />}
        slot='finger'
        minItemLevel={700}
        maxItemLevel={760}
        // items={exampleItems}
      />
      <GearSelector
        label='Ring 2'
        icon={<Finger />}
        slot='finger'
        minItemLevel={700}
        maxItemLevel={760}
        // items={exampleItems}
      />
    </div>
  );
}
