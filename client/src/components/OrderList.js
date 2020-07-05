import React from 'react';
import axios from 'axios'

export default class OrderList extends React.Component{
    state = {
        Order: []
    }
    componentWillMount(){
        axios.get('http://localhost:8000/Order')
            .then(data=>this.setState({
                Order: data.data
            }))
    }
render(){
    const order = this.state.Order.map(item=>{
        return(
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.budget}</td>
                <td>
                    <button className='btn btn-danger'>Not Attended</button>
                </td>
            </tr>
        )
    })
    return(
        <>
           <h4 className='display-2 text-center'>Order list</h4>
           <table className='table table-bordered col-9 mx-auto'>
               <thead className='thead-light'>
                   <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Budget</th>
                    <th>Status</th>
                    </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>Mara Moja</td>
                       <td>450 tablets</td>
                       <td>45000 Ksh</td>
                       <td className="text-success">Paid</td>
                   </tr>
                   <tr>
                       <td>Trichohist</td>
                       <td>300 ltrs</td>
                       <td>4500 Ksh</td>
                       <td className="text-danger">Unpaid</td>
                   </tr>
                   <tr>
                       <td>Quinine</td>
                       <td>500 Kgs</td>
                       <td>45000 Ksh</td>
                       <td className="text-danger">Debt</td>
                   </tr>
                   <tr>
                       <td>Panadol</td>
                       <td>500 tablets</td>
                       <td>4500 Ksh</td>
                       <td className="text-success">Paid</td>
                   </tr>
                   {order}
               </tbody>

           </table>
        </>
    )
}
}