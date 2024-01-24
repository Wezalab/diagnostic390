import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react'
import { filter } from 'lodash';

// @mui
import {
  Container, Box, Typography, Card, TableContainer, Table, TableBody, TableRow, TableCell, Checkbox, Stack, IconButton, Paper, TablePagination, Avatar, CircularProgress, Popover, MenuItem,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { useNavigate } from 'react-router-dom';
import useWooCommerceAPI from '../../hooks/useWooCommerceAPI';
import { ProductListHead, ProductListToolbar } from '../../sections/@dashboard/product';
import Scrollbar from '../../components/scrollbar';
import Iconify from '../../components/iconify';
import Label from '../../components/label/Label';

export default function MesProduits() {
  const navigate = useNavigate();

  const {
    products,
    loading,
    fetchProducts
    // error,
  } = useWooCommerceAPI();

  //  react-hooks/exhaustive-deps
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [currentProduct, setCurrentProduct] = useState(null)

  const TABLE_HEAD = [
    { id: 'name', label: 'Produit', alignRight: false },
    { id: 'date_created', label: 'Date de creation', alignRight: false },
    { id: 'price', label: 'Prix', alignRight: false },
    { id: 'stock_status', label: 'Stock', alignRight: false },
    { id: 'stock_quantity', label: 'Quantité', alignRight: false },
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
      return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
  }


  const handleOpenMenu = (event, productObject) => {
    setOpen(event.currentTarget);
    setCurrentProduct(JSON.stringify(productObject))
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
      const newSelecteds = products.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

  const filteredUsers = applySortFilter(products, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  return (
    <>
      <Helmet>
        <title> TRANSFORME | Mes Produits </title>
      </Helmet>

      <Container >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }} >
          <Typography variant="h4" sx={{ mb: 1 }}>
            Mes Produits / Services
          </Typography>

          <LoadingButton sx={{ textTransform: "inherit" }} size="large" variant="contained"
            onClick={() => navigate('/dashboard/add-produit', { replace: true })}>
            Ajouter un produit / Service
          </LoadingButton>
        </Box>

        <Card>
          <ProductListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <ProductListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={products.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    /* eslint-disable camelcase */

                    const { id, name,  date_created, price, categories, stock_status, images, stock_quantity } = row;
                    const selectedUser = selected.indexOf(name) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, name)} />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="2">
                          <Stack direction="row" alignItems="center" spacing={2}>
                          
                            <Avatar  variant="rounded" src={images[0]?.src} alt="photo URL" sx={{width: 100, height: 100}} />
                            <Box>
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                            <Typography variant="caption" noWrap>
                              {categories?.map(item => item.name)?.join(', ')}
                            </Typography>
                            </Box>
                          </Stack>
                        </TableCell>

                         <TableCell align="left">{date_created}</TableCell>


                         <TableCell align="left">{price} $</TableCell>

                        
                        <TableCell align="left"><Label color={(stock_status === 'outofstock' && 'error') || 'success'}>{stock_status}</Label> </TableCell>
                        <TableCell align="left">{stock_quantity}</TableCell>
                        
                        
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
                            <strong>&quot;{filterName}&quot;</strong>.
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
            count={products.length}
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
          // console.log(currentProduct);
          const params = { productObject: currentProduct };
          navigate('/dashboard/view-produit',  { state: params });
        }}>
          <Iconify icon={'mdi:eye'} sx={{ mr: 2 }} />
          Voir Details
        </MenuItem>

        <MenuItem  onClick={()=> {
          // console.log(currentProduct);
          const params = { productObject: currentProduct };
          navigate('/dashboard/add-produit',  { state: params });
        }}>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Modifier
        </MenuItem>

        <MenuItem sx={{color:'red'}}  onClick={()=> {
          // console.log(currentProduct);
          // const params = { productObject: currentProduct };
          // navigate('/dashboard/-details',  { state: params });
        }}>
          <Iconify icon={'fluent:delete-32-filled'} sx={{ mr: 2 }} />
          Supprimer
        </MenuItem>
      </Popover>

    </>
  );
}
