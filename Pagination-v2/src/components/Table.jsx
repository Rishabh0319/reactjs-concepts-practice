import React from 'react'

const Table = ({tableData}) => {
    return (
        <main className='w-full  flex justify-center items-center mt-8'>
            <table className='w-1/2'>
                <thead>
                    <tr className='text-3xl uppercase'>
                        <th>#</th>
                        <th>Food</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((row) =>
                            <tr className='text-xl' key={row.id}>
                                <td className='text-center'>{row.id}</td>
                                <td className='text-center'>{row.name}</td>
                                <td className='text-center'>{row.price}$</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </main>
    )
}

export default Table