import React from 'react';
import test_data from './test-data.json';
import {useTable} from 'react-table';

export default function ReactTable(){
    console.log(test_data.get_practicelist)
    // const data = React.useMemo(test_data.get_practicelist);
    const data = React.useMemo(
        () => [
          {
            col1: 'Hello',
            col2: 'World',
          },
          {
            col1: 'react-table',
            col2: 'rocks',
          },
          {
            col1: 'whatever',
            col2: 'you want',
          },
        ],
        []
      ) 
    const columns = React.useMemo(
        () => [
            {
                Header: 'Practice Name',
                accessor: 'practname'
            },
            {
                Header: 'Study Count',
                accessor: 'studycount'
            }
        ]
    );
    const tableInstance = useTable({columns, data});

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance
    return(
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => {
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column =>(
                                    <th {...column.getHeaderProps()}>
                                        {
                                            column.render('Header')
                                        }
                                    </th>
                                ))
                            }
                        </tr>
                    })}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row =>{
                            prepareRow(row)
                            return(
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => {
                                            return(
                                                <td {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}