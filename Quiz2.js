import React from 'react'
import { NavLink } from 'react-router-dom'
const Quiz2 = () => {
  return (
    <div>
         <center><h1>Quiz</h1>
        <h2>2.How many states are there in india?</h2>
   <p>  1.<button>24</button>  </p> 
   <p>  2.<button>26</button>  </p>
    <p> 3.<button>30</button>  </p> 
    <p> 4.<button>28</button>  </p> 
 <NavLink to={"/"}><button>Previous</button></NavLink>    <NavLink to={"/3rd"}><button>Next</button></NavLink>
    </center>
    </div>
  )
}

export default Quiz2