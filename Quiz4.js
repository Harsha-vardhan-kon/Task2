import React from 'react'
import { NavLink } from 'react-router-dom'
const Quiz4 = () => {
  return (
    <div>
         <center><h1>Quiz</h1>
        <h2>4.Dozen means</h2>
   <p>  1.<button>12</button>  </p> 
   <p>  2.<button>6</button>  </p>
    <p> 3.<button>10</button>  </p> 
    <p> 4.<button>13</button>  </p> 
 <NavLink to={"/3rd"}><button>Previous</button></NavLink>    <NavLink to={"/5th"}><button>Next</button></NavLink>
    </center>
    </div>
  )
}

export default Quiz4