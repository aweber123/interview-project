import React from 'react';
import { Input } from 'baseui/input';
import { Select } from "baseui/select";
import Search from "baseui/icon/search";

import './ListHeader.css';

const ListHeader = ({filters, setFilters}) => {
  return(
    <div className={'list-header'}>
      <div className={'search-container'}>
        <Input
          value={filters.searchParam || ""}
          onChange={e => setFilters({
            region: null,
            searchParam: e.target.value,
          })}
          placeholder="Search for a Country"
          clearOnEscape
          startEnhancer={<Search size={24} />}
          overrides={{
            Root: {
              style: { 
                width: '500px'
              }
            }
          }}
        />
      </div>

        <div className={'select-container'}>
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
            overrides={{
              Root: {
                style: {
                  display: 'inline-block', 
                  width: '250px',
                  float: 'right',
                }
              }
            }}
          />
        </div>
      </div>
  )
}

export default ListHeader;