import { useEffect, useState } from 'react'

const SearchInput = ({ value: initValue, onChange, debounce = 500, ...props }) => {

  const [value, setValue] = useState(initValue);

  useEffect(() => {

    setValue(initValue);
    
  }, [initValue]);

  // * 0.5s After set value in state

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () =>clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props} 
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default SearchInput