import React from 'react'
import './CollapseItem.css'

export default function CollapseItem({id, title, content}) {
    const parentMenuClass = content ? 'menu-label parent-menu' : 'menu-label';
    const arrows = content ? ( 
                <div>
                    <i className="material-icons arrow-down">
                            keyboard_arrow_down
                    </i>
                    <i className="material-icons arrow-up">
                        keyboard_arrow_up
                    </i>
                </div> ) : <i/>; 
    return (
        <div className="collapse-item">
            <input 
                className="menu-button hiden"
                id={id} 
                type="checkbox"
            />
            <label className={parentMenuClass}  htmlFor={id}>
                {title} 
                {arrows}
            </label>
            <div className="menu-body">
                {content}                         
            </div>
        </div>
    );
}
