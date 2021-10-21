import React from 'react'


const MenuItem = ({menu}) => {
   return (
       <tr>
           <td>
               {menu.main}
           </td>
           <td>
               {menu.api}
           </td>
       </tr>
   )
}


const MenuList = ({menus}) => {
    return (
        <table>
            <tr>
                <th>
                    main
                </th>
                <th>
                    api
                </th>
                {menus.map((menu) => <MenuItem menu={menu} />)}
            </tr>
        </table>
    )
 }
 
 
 export default MenuList