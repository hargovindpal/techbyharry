import React from 'react';
import { Link } from 'react-router-dom';

function ListGroup({ title, items = [], onSelect, selectedItem, className = "", listClassName = "" }) {

  return (
    <div className={`list-group col-md-3 ${listClassName}`}>
      <div className={`list-group-item list-group-item-action ${className}`}>
        {title}
      </div>

      {items.map((item) => {
            const key = item.name;
            const isActive = selectedItem?.name === item.name;

            return item.url ? (
              <Link
                to={item.url}
                key={key}
                className={`list-group-item list-group-item-action ${isActive ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ) : (
              <div
                key={key}
                onClick={() => onSelect?.(item)}
                className={`list-group-item list-group-item-action ${isActive ? "active" : ""}`}
                style={{ cursor: 'pointer' }}
              >
                {item.name}
              </div>
            );
          })}
    </div>
  );
}

export default ListGroup;
