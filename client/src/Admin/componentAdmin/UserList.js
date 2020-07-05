import React from 'react'

export default function UserList({children}){
    return(
        <>
            <div className='col-10 mx-auto'>
                <h2 className='text-center text-muted'>Our Employees</h2>
                <table className='table table-bordered'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                            <tbody>
                            {children}
                            </tbody>
                </table>
            </div>
        </>
    )
}