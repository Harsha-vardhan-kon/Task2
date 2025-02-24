import React from 'react'
import { NavLink } from 'react-router-dom'
const Quiz3 = () => {
  return (
    <div>
         <center><h1>Quiz</h1>
        <h2>3.In which Year india won ODI world cup under Dhoni Captancy?</h2>
   <p>  1.<button>2011</button>  </p> 
   <p>  2.<button>2010</button>  </p>
    <p> 3.<button>2019</button>  </p> 
    <p> 4.<button>2023</button>  </p> 
 <NavLink to={"/2nd"}><button>Previous</button></NavLink>    <NavLink to={"/4th"}><button>Next</button></NavLink>
    </center>
    </div>
  )
}

export default Quiz3