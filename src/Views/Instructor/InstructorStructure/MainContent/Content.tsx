import './Content.css';
import {Route} from "react-router-dom";
import React from "react";


// let Content;
// export default Content = () => {
//     return (
//         <div className='Content'>
//             <Route path='/action/performance/class'>Practice</Route>
//         </div>
//     );
// };
export class Content extends React.Component {
    render() {
        return (
            <div className='Content'>
                <Route path='/action/performance/class'>Practice</Route>
            </div>
        );
    }
}

