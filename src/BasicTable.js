import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable(props) {

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  console.log("props", props)
  
  const rows = [
    createData('Balance', 'Decimals', 'Name', 'Symbols'),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
        <TableRow
            >
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Symbol</TableCell>
              <TableCell align="left">Decimals</TableCell>
              <TableCell align="left">Balance</TableCell>
              <TableCell align="left">Token Address</TableCell>
            </TableRow>
          {props.userBalances.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {/* {row.name} */}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.symbol}</TableCell>
              <TableCell align="left">{row.decimals}</TableCell>
              <TableCell align="left">{row.balance}</TableCell>
              <TableCell align="left">{row.tokenAddress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
