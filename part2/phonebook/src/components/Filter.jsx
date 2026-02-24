const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <label>
        Filter shown with:
        <input type="text" value={filter} onChange={handleFilterChange} />  on name
      </label>
    </div>
  )
}

export default Filter
