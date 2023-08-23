import React from "react";
// import React from './popularcities';  



function Popularcities(props)
{

    return(

        <div>
<img src={props.newcity.imges} />
<p>{props.newcity.cname}</p>
</div>
    );
}

export default Popularcities;

