'use client'

import { useState, useEffect } from 'react'
import { Select, SelectItem } from '@heroui/react'
import StatBlock from './statblock'
import MateriaSelector from './materiaselector'
import { ItemType, ApiItemResponse, ItemResponse, EquipmentFormValues } from '@/types/gear'
import { useController, UseControllerProps } from 'react-hook-form'

const GARLAND_API_URL = 'https://www.garlandtools.org/api'
const GARLAND_DB_URL = 'https://www.garlandtools.org/db'

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

interface GearSelectorProps {
  label: string
  icon?: React.ReactNode
  slot: ItemType
  minItemLevel: number
  maxItemLevel: number
}

const GearSelector = (props: GearSelectorProps & UseControllerProps<EquipmentFormValues>) => {

  const { label, icon, slot, minItemLevel, maxItemLevel } = props
  const { field } = useController(props)

  const [data, setData] = useState<Array<ApiItemResponse>>([])

  const fetchSpecificItem = (selectedItemId: string) => {
    fetch(`${GARLAND_DB_URL}/doc/item/en/3/${selectedItemId}.json`)
      .then((res) => res.json())
      .then((data: ItemResponse) => {
        field.onChange(data.item)
      })
  }

  useEffect(() => {
    fetch(`${GARLAND_API_URL}/search.php?lang=en&ilvlMin=${minItemLevel}&ilvlMax=${maxItemLevel}&itemCategory=${itemCategories[slot]}&jobCategories=1,5,30,34,36,37,39,40,42,43,45,46,47,48,49,51,52,54,60,67,71,74,76,81,84,88,94,95,97,101,106,108,109,114,118,119,130,142,143,161,184,192,193,195`)
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
            item={field.value}
            displaySubstats={['crt', 'det', 'dh', 'sks']}
          />
        </div>
        <div className='flex flex-row gap-2 h-10'>
          {field.value && Array.from(Array(field.value.advancedMeldingForbidden ? field.value.sockets : 5)).map((_, index) => <MateriaSelector key={`${field.value?.name}-materia${index}`} />)}
        </div>
      </div>
    </div>
  )
}

export default GearSelector