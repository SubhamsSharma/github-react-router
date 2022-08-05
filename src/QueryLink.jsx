import { useLocation, NavLink} from 'react-router-dom'

export function QueryLink({to, ...restProps}){
  let location = useLocation()
  return <NavLink to ={to + location.search} {...restProps}/>
}