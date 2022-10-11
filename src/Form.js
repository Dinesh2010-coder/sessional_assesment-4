import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Content from './Content'



export default function Form() {
  
  const[name,setname]=useState('');
  const[party,setparty]=useState('');
  const[tenure,settenure]=useState('');
  let history=useNavigate();
  const manageSubmit=(e)=>{
    e.preventDefault();
    let a=name,b=party,c=tenure;
    Content.push({a,b,c});

    history('/leaders');
  }



  return (
    <div>
    <div className='heading'>
        <h1>Prime Minister's List</h1>
    </div>
    <form class = "myForm">
    <div class="leader_name">
    <label for="name" >Name</label>
    <input type="text" class="name" id="name"  onChange={(e) => setname(e.target.value)}/>
    </div>
    <div class="leader_party">
    <label for="party" >Party</label>
    <input type="text" class="party" id="party"  onChange={(e) => setparty(e.target.value)}/>
    </div>
    <div class="leader_tenure">
    <label for="tenure" >Tenure</label>
    <input type="number" class="tenure" id="tenure"  onChange={(e) => settenure(e.target.value)}/>
    </div>
    <Link to='/leaders'>
    <button type="submit" class="btn" onClick={manageSubmit}>Submit</button>
    </Link>
    
    </form>
    </div>
  )
}
