import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
const Quiz5 = () => {
  return (
    <div>
         <center><h1>Quiz</h1>
        <h2>5.How many ODI world cups does India got after 2011</h2>
   <p>  1.<button>0</button>  </p> 
   <p>  2.<button>2</button>  </p>
    <p> 3.<button>1</button>  </p> 
    <p> 4.<button>3</button>  </p> 
 <NavLink to={"/4th"}><button>Previous</button></NavLink>    <Button variant='contained'>Check Score</Button>
    </center>
    </div>
  )
}

export default Quiz5