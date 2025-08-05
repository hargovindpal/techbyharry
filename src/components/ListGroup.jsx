import React from 'react'
import { Link } from 'react-router-dom'

function ListGroup({title, items = [], onSelect, className=" ", listClassName=" "}) {
  return (
    <>
      <div className={`list-group col-md-3 ${listClassName}`}>
            <Link to="#" className={`list-group-item list-group-item-action ${className}`}>
            {title}
            </Link>

            {items.map((item, index )=>(
                <Link to={item.url} key={index} onClick={() => onSelect(item)} className="list-group-item list-group-item-action">
                    {item.name}
                </Link>
            ))}
      </div>
    </>
  )
}

export default ListGroup
