import React from 'react';
import {useStyletron} from 'baseui';
import { Input } from 'baseui/input';
import { Select } from "baseui/select";
import './ListHeader.css';

const ListHeader = ({filters, setFilters}) => {
  const [css, theme] = useStyletron();

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
          overrides={{
            Root: {
              style: {
                display: 'inline-block', 
                width: '500px',
                position: 'relative',
                float: 'left'
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