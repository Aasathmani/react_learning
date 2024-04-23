
export  function TabButton({ children,onSelect ,isSelected,...props}) {
   
  return(
    <button  className={isSelected ? 'active': undefined} {...props} >{children}</button>
  )
}
