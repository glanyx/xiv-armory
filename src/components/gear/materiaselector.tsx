'use client'

import { Select, SelectItem } from '@heroui/react'
import { SubstatOptions } from './statblock'

enum MateriaGrade {
  I = 1,
  II = 2,
  III = 3,
  IV = 4,
  V = 5,
  VI = 6,
  VII = 7,
  VIII = 8,
  IX = 9,
  X = 10,
  XI = 11,
  XII = 12,
}

interface MateriaSelectorProps {
}

interface MateriaProps {
  id: number
  grade: MateriaGrade
  stat: SubstatOptions
  value: number
}

const materiaItems: Array<MateriaProps> = [
  { id: 1, grade: MateriaGrade.XII, stat: 'crt', value: 54 },
  { id: 2, grade: MateriaGrade.XII, stat: 'dh', value: 54 },
  { id: 3, grade: MateriaGrade.XII, stat: 'det', value: 54 },
  { id: 4, grade: MateriaGrade.XII, stat: 'sks', value: 54 },
  { id: 5, grade: MateriaGrade.XII, stat: 'sps', value: 54 },
]

const MateriaSelector = ({
}: MateriaSelectorProps) => {

  return (
    <Select aria-label={`materia-dropdown`} className='w-30'>
      {materiaItems.map(materia => <SelectItem key={materia.id}>{`+${materia.value} ${materia.stat.toUpperCase()}`}</SelectItem>)}
    </Select>
  )
}

export default MateriaSelector