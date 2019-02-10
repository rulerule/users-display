import React from 'react'

const searchField = (props) => {

  return (
    <div className="search-field-wrapper">
      <input
        type="text"
        className="search-field"
        onChange={ props.changeHandler }
        placeholder={ props.placeholder }
      />
      { /** @NOTE
      * icon is free to use, anddd a bit ugly , but it kinda does the purpose
      */
      }
      <img src="https://www.clipartmax.com/png/small/32-322039_magnifying-glass-legacy-icon-tags-icons-etc-magnifying-glass-icon-small.png" alt="Magnifying Glass Legacy Icon Tags Icons Etc - Magnifying Glass Icon Small @clipartmax.com"/>
    </div>
  )
}

export default searchField
