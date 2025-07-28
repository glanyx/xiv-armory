'use client'

import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GearElementArgs, EquipmentFormValues, Stats, translateSubstat } from '@/types/gear'

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

const slots: Array<GearElementArgs> = [
  { label: 'Main Hand', slot: 'weapon', name: 'weapon', icon: <Mainhand /> },
  { label: 'Head', slot: 'head', name: 'head', icon: <Head /> },
  { label: 'Chest', slot: 'chest', name: 'chest', icon: <Chest /> },
  { label: 'Hands', slot: 'hands', name: 'hands', icon: <Hands /> },
  { label: 'Legs', slot: 'legs', name: 'legs', icon: <Legs /> },
  { label: 'Feet', slot: 'feet', name: 'feet', icon: <Feet /> },
  { label: 'Ears', slot: 'ears', name: 'ears', icon: <Ears /> },
  { label: 'Neck', slot: 'neck', name: 'neck', icon: <Neck /> },
  { label: 'Wrist', slot: 'wrist', name: 'wrist', icon: <Wrist /> },
  { label: 'Ring 1', slot: 'finger', name: 'finger1', icon: <Finger /> },
  { label: 'Ring 2', slot: 'finger', name: 'finger2', icon: <Finger /> },
]

export default function MyGear() {

  const { control, subscribe, handleSubmit } = useForm<EquipmentFormValues>()
  const [stats, setStats] = useState<Stats>({ crt: 0, dh: 0, det: 0, sks: 0, sps: 0, tnc: 0, pie: 0 })
  
  useEffect(() => {
    return subscribe({
      formState: { values: true },
      callback: ({ values }) => {
        const stats = Object.keys(values).reduce((acc, cur) => {
          if (!values[(cur as keyof EquipmentFormValues)]) return acc
          const { attr, attr_max } = values[(cur as keyof EquipmentFormValues)].item
          const cap = Math.max(attr['Critical Hit'] || 0, attr_max['Critical Hit'] || 0)
          const itemStats = { crt: 0, dh: 0, det: 0, sks: 0, sps: 0, tnc: 0, pie: 0 }
          Object.keys(translateSubstat).forEach(substat => itemStats[substat as keyof Stats] += attr[translateSubstat[substat as keyof Stats]] || 0)
          values[(cur as keyof EquipmentFormValues)]?.materia.forEach(materia => {
            if (!materia) return
            const key = Object.keys(materia)[0]
            itemStats[key as keyof Stats] += materia[key as keyof Stats]
          })
          console.log(values)
          Object.keys(translateSubstat).forEach(substat => acc[substat as keyof Stats] += itemStats[substat as keyof Stats] > cap ? cap : itemStats[substat as keyof Stats])
          return acc
        }, { crt: 0, dh: 0, det: 0, sks: 0, sps: 0, tnc: 0, pie: 0 })
        setStats(stats)
      }
    })
  }, [subscribe])

  const onSubmit: SubmitHandler<EquipmentFormValues> = (data) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={(handleSubmit(onSubmit))}>
        <div className="w-full grid xl:grid-flow-col xs:grid-col xl:grid-rows-6 justify-center gap-4">
          {slots.map(itemSlot => (
            <GearSelector
              key={itemSlot.label}
              name={itemSlot.name}
              control={control}
              label={itemSlot.label}
              icon={itemSlot.icon}
              slot={itemSlot.slot}
              minItemLevel={700}
              maxItemLevel={760}
            />
          ))}
        </div>
      </form>
      <span>{`Crit: ${stats.crt} | DH: ${stats.dh} | Det: ${stats.det} | SkS: ${stats.sks}`}</span>
      <button type='submit'>Submit</button>
    </>
  );
}
