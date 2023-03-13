import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Table/table.css'

function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
}

const rows = [
    createData(localStorage.getItem("name"), 1590, "15-03-22", "3", 4.0),
    createData(localStorage.getItem("name"), -237,  "15-03-22" , "15", 4.3),
    createData(localStorage.getItem("name"), 2620, "19-03-22", "1", 6.0),
    createData(localStorage.getItem("name"), 1305, "23-04-22" , "4", 4.3),
    createData(localStorage.getItem("name"), 356, "09-06-22" , "7", 3.9),
];

const makeStyle = (status) => {
    if (status === 'Approved') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    } else if (status === 'Pending') {
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    } else {
        return {
            background: '#59bfff',
            color: 'white',
        }
    }
}

export default function BasicTable() {
    return (
        <div className="Table">
            <h3 className='mb-3 text-white'>Recent Events</h3>
            <TableContainer component={Paper}
                style={{ boxShadow: '0px 13px 20px 0px #80808029' }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Rating</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Position</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.trackingId}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">
                                    <span className='status' style={makeStyle(row.status)}>{row.status}</span>
                                </TableCell>
                                <TableCell align="left" className="Details" >Detail</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}