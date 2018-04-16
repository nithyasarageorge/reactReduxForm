export function handleChange(data,selectedOption) {
  return {
    type: 'HANDLE_CHANGE',
    data,
    selectedOption
  };
}
