import React from 'react'
import { useNavigate } from 'react-router-dom'
import Content from './Content'
import './Leaders.css'



export default function Leaders() {

    let history=useNavigate();
    history('/');

  return (
    <div class = "content">
        
        <div class = "leaders">
        <h1>Leaders</h1>
        <div>
            <table border = "1px solid blue">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>PARTY</th>
                        <th>TENURE</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        Content.map((item)=>{
                            return(
                                <tr>
                                    <td>
                                        {item.a}
                                    </td>
                                    <td>
                                        {item.b}
                                    </td>
                                    <td>
                                        {item.c}
                                    </td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
                
            </table>

        </div>
        </div>
        
    </div>

    
  )
}
