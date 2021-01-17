import React from 'react';
import { Input } from 'baseui/input';
import { Select } from "baseui/select";


const ListHeader = ({filters, setFilters}) => {
  return(
    <div>
      <Input
        value={filters.searchParam || ""}
        onChange={e => setFilters({
          region: null,
          searchParam: e.target.value,
        })}
        placeholder="Search for a Country"
        clearOnEscape
      />
      <Select
        options={[
          { label: "Africa"},
          { label: "Americas"},
          { label: "Asia"},
          { label: "Europe"},
          { label: "Oceania"}
        ]}
        searchable={false}
        labelKey="label"
        valueKey="label"
        placeholder="Filter by Region"
        onChange={({value}) => {
          setFilters({
            region: value,
            searchParam: null
          })}
        }
        value={filters.region || ""}
      />
    </div>
  )
}

export default ListHeader;