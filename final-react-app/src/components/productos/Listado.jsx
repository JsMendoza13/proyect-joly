import React from 'react'

const Listado = () => {
  return (
    <section className='tabla'>
            <table className='prueba'>
                <tr >
                    <th>texto</th>
                    <th>texto</th>
                    <th>texto</th>
                    <th>texto</th>
                    <th>texto</th>
                    <th>acciones</th>
                </tr>
                <tbody>
                    <tr>
                        <td>texto</td>
                        <td>texto</td>
                        <td>texto</td>
                        <td>texto</td>
                        <td>texto</td>
                        <td className='acciones'> 
                        <a href=""><img src="" alt="" className='editar'></img></a>
                        <a href=""><img src="" className='quitar'></img></a>
                        </td>
                    </tr>
                    </tbody>
            </table>
        </section>
  )
}

export default Listado