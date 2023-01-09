import type { SelectProps } from '@uvodohq/planum'
import { Select } from '@uvodohq/planum'
import { countryList } from './select-options'
import { useState, useEffect } from 'react'

interface Country {
  id: number
  name: string
}

export default function SelectExampleAsync(
  props?: Partial<SelectProps<Country>>,
) {
  const [list, setList] = useState<any>()

  // simulating async list load for testing select
  useEffect(() => {
    setTimeout(() => {
      setList(countryList)
    }, 3000)
  }, [])

  return (
    <Select
      items={list}
      isLoading={!list}
      labelKey="name"
      aria-label="label"
      placeholder="Async list load"
      {...props}
    />
  )
}