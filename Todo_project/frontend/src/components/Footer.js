import React from 'react'


const FooterItem = ({footer}) => {
   return (
       <tr>
           <td>
               {footer.main}
           </td>
           <td>
               {footer.api}
           </td>
           <td>
               {footer.info}
           </td>
           <td>
               {footer.contacts}
           </td>
       </tr>
   )
}


const FooterList = ({footers}) => {
    return (
        <table>
            <th>
                main
            </th>
            <th>
                api
            </th>
            <th>
                info
            </th>
            <th>
                contacts
            </th>
            {footers.map((footer) => <FooterItem footer={footer} />)}
        </table>
    )
 }
 
 
 export default FooterList