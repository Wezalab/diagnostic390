import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react'
import { filter } from 'lodash';

// @mui
import {
  Container, Box, Typography, Card, TableContainer, Table, TableBody, TableRow, TableCell, Checkbox, Stack, IconButton, Paper, TablePagination, Avatar, CircularProgress, Popover, MenuItem,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import useWooCommerceAPI from '../../hooks/useWooCommerceAPI';
import { CommandeListHead, CommandeListToolbar } from '../../sections/@dashboard/product';

import Scrollbar from '../../components/scrollbar';
import Iconify from '../../components/iconify';
import Label from '../../components/label/Label';

export default function MesFactures() {
  const navigate = useNavigate();

  const {
    commandes,
    loading,
    customers,
    fetchCommandes
    // error,
  } = useWooCommerceAPI();

  //  react-hooks/exhaustive-deps
  useEffect(() => {
    fetchCommandes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(commandes);
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('number');

  const [filterNumber, setFilterNumber] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [currentCommamnde, setCurrentCommamnde] = useState(null)

  const TABLE_HEAD = [
    { id: 'number', label: 'number', alignRight: false },
    { id: 'customer_id', label: 'customer_id', alignRight: false },
    { id: 'date_created', label: 'date_created', alignRight: false },
    { id: 'total', label: 'total', alignRight: false },
    { id: 'line_items', label: 'line_items', alignRight: false },
    { id: 'status', label: 'status', alignRight: false },
    { id: '' },
  ];

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(array, (_user) => _user.number.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
  }

  const handleOpenMenu = (event, commandeObject) => {
    setOpen(event.currentTarget);
    setCurrentCommamnde(JSON.stringify(commandeObject))
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = commandes.map((n) => n.number);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, number) => {
    const selectedIndex = selected.indexOf(number);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, number);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterNumber(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - commandes.length) : 0;

  const filteredCommandes = applySortFilter(commandes, getComparator(order, orderBy), filterNumber);

  const isNotFound = !filteredCommandes.length && !!filterNumber;

  return (
    <>
      <Helmet>
        <title> TRANSFORME | Mes Factures </title>
      </Helmet>

      <Container >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }} >
          <Typography variant="h4" sx={{ mb: 1 }}>
            Mes Factures
          </Typography>
        </Box>

        <Card>
          <CommandeListToolbar numSelected={selected.length} filterNumber={filterNumber} onFilterNumber={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <CommandeListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={commandes.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredCommandes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    /* eslint-disable camelcase */

                    const { id, number,  customer_id, date_created, total,line_items, status} = row;
                    
                    const selectedOrder = selected.indexOf(number) !== -1;
                    const selectedUser = customers.find((cus) => cus.id === customer_id);

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedOrder}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={selectedOrder} onChange={(event) => handleClick(event, number)} />
                        </TableCell>

                        <TableCell align="left"># N°{number}</TableCell>


                        <TableCell component="th" scope="row" padding="2">
                          <Stack direction="row" alignItems="center" spacing={2}>
                          
                            <Avatar src={selectedUser?.avatar_url}  variant="circular" alt="photo URL"  />
                            <Box>
                            <Typography variant="subtitle2" noWrap>
                              {selectedUser?.username? selectedUser?.username : "Visiteur"}
                            </Typography>
                            <Typography variant="caption" noWrap>
                              {selectedUser?.email? selectedUser?.email : ""}
                            </Typography>
                            </Box>
                          </Stack>
                        </TableCell>

                         <TableCell align="left">{date_created } </TableCell>

                         <TableCell align="left">{total} $</TableCell>
                         <TableCell align="left">{line_items?.length}</TableCell>

                        
                        <TableCell align="left"><Label color={(status === 'outofstock' && 'error') || 'success'}>{status}</Label> </TableCell>
                        
                        
                        <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={(e)=>{
                              handleOpenMenu(e, row);
                            }}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                          Pas trouvé
                          </Typography>

                          <Typography variant="body2">
                            Aucun résultat trouvé pour &nbsp;
                            <strong>&quot;{filterNumber}&quot;</strong>.
                            <br /> Essayez de vérifier les fautes de frappe ou d'utiliser des mots complets.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}

              {loading && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <CircularProgress />
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={commandes.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>

      </Container>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem  onClick={()=> {
          // console.log(currentCommamnde);
          const params = { commandeObject: currentCommamnde, customers };
          navigate('/dashboard/view-facture',  { state: params });
        }}>
          <Iconify icon={'mdi:eye'} sx={{ mr: 2 }} />
          Voir Details
        </MenuItem>

      </Popover>

    </>
  );
}
