import React from 'react';
import { Input } from 'baseui/input';
import { Select } from "baseui/select";


const ListHeader = () => {
  const [value, setValue] = React.useState();

  return(
    <div>
      <Input
        value={value}
        onChange={e => console.log(e.target.value)}
        placeholder="Search for a Country"
        clearOnEscape
      />
      <Select
        options={[
          { label: "Africa", id: "africa" },
          { label: "America", id: "america" },
          { label: "Asia", id: "asia" },
          { label: "Europe", id: "europe" },
          { label: "Oceania", id: "oceania" }
        ]}
        value={value}
        placeholder="Filter by Region"
        onChange={params => console.log(params.value[0].id)}
      />
    </div>
  )
}

export default ListHeader;