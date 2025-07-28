export interface GearElementArgs {
  label: string
  slot: ItemType
  name: keyof EquipmentFormValues
  icon: React.ReactNode
}

export interface ApiItemResponse {
  id: string
  obj: ApiItem
  type: string
}

export interface ItemResponse {
  item: IItem
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

type MateriaStat = 'crt' | 'dh' | 'det' | 'sps' | 'sks' | 'tnc' | 'pie'

type Materia = {
  [key in MateriaStat]: number
}

export interface ItemWithMateria {
  item: IItem
  materia: Array<Materia>
}

export interface Stats {
  crt: number
  dh: number
  det: number
  sks: number
  sps: number
  tnc: number
  pie: number
}

export type ItemType = 'weapon' | 'head' | 'chest' | 'hands' | 'legs' | 'feet' | 'ears' | 'neck' | 'wrist' | 'finger'

export type EquipmentFormValues = {
  weapon: ItemWithMateria
  head: ItemWithMateria
  chest: ItemWithMateria
  hands: ItemWithMateria
  legs: ItemWithMateria
  feet: ItemWithMateria
  ears: ItemWithMateria
  neck: ItemWithMateria
  wrist: ItemWithMateria
  finger1: ItemWithMateria
  finger2: ItemWithMateria
}

export const translateSubstat = {
  crt: 'Critical Hit',
  dh: 'Direct Hit Rate',
  det: 'Determination',
  sks: 'Skill Speed',
  sps: 'Spell Speed',
  tnc: 'Tenacity',
  pie: 'Piety',
}
