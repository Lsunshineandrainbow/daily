import React,{component} from 'react';
const Children = ({match})=>{   console.log(match)
    return(

        <div>Children
            {match.params.num}
        </div>
    )
}
export default Children;