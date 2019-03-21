import React from 'react'
import CollapseItem from '../CollapseItem/CollapseItem'

export default function NestedMenu({menus}) {
   
  function recrusivelyGenerateMenu(menus) {
        
        const menuList = [];
        // For each Menu render childs content
        menus.forEach(menu => {
            const content = menu.childs.map(childMenu => {
                const content = recrusivelyGenerateMenu(childMenu.childs);
                return  <CollapseItem 
                            key = {childMenu.title}
                            id = {childMenu.title}
                            title = {childMenu.content ? childMenu.content: childMenu.title} 
                            content = {content.length === 0 ? null : content}>
                        </CollapseItem>
            });
            // Push menu to list of Menus
            menuList.push( 
                <CollapseItem
                    id = {menu.title} 
                    key = {menu.title}
                    title = {menu.content ? menu.content: menu.title} 
                    content = {content.length === 0 ? null : content}>
                </CollapseItem>
            );  
        });

        return menuList
    }


  return (
    <div>
      {menus ? recrusivelyGenerateMenu(menus): null}
    </div>
  )
}
