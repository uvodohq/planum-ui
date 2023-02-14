import { MultiSelect, MultiSelectProps } from '@uvodohq/planum'
import { countryGroupList } from './country-group-list'

export default function MultiSelectExample(props?: Partial<MultiSelectProps>) {
  return (
    <MultiSelect
      items={countryGroupList}
      labelKey="name"
      aria-label="label"
      placeholder="Multi Select a country"
      {...props}
    />
  )
}