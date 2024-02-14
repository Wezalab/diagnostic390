import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { filter } from 'lodash';

// @mui
import {
    Container, Box, Typography, Card, TableContainer, Table, TableBody, TableRow, TableCell, Checkbox, Stack, IconButton, Paper, TablePagination, Avatar, CircularProgress, TableHead, Collapse,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import useWooCommerceAPI from '../../hooks/useWooCommerceAPI';
import { CommandeListHead, CommandeListToolbar } from '../../sections/@dashboard/product';

import Scrollbar from '../../components/scrollbar';
import Iconify from '../../components/iconify';
import Label from '../../components/label/Label';


MesCommandes.propTypes = {
    role: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
};


export default function MesCommandes(props) {

    const { role, user } = props;

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

    // eslint-disable-next-line no-unused-vars
    const [commandesUser, setCommandeUser] = useState(role === 'USER' ? commandes.filter((val) => val.customer_id === customers.find((val) => val.email === user?.user?.user?.email)?.id) : commandes)
    console.log("role", role);

    const [page, setPage] = useState(0);

    const [order, setOrder] = useState('asc');

    const [selected, setSelected] = useState([]);

    const [orderBy, setOrderBy] = useState('number');

    const [filterNumber, setFilterNumber] = useState('');

    const [rowsPerPage, setRowsPerPage] = useState(5);


    const TABLE_HEAD = [
        { id: 'number', label: 'number', alignRight: false },
        { id: 'customer_id', label: role === "USER" ? 'Fournisseur':'Beneficiaire', alignRight: false },
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
        const params = { commandeObject: JSON.stringify(commandeObject), customers };
        console.log(params);

        navigate('/dashboard/view-commande', { state: params, relative: true });
    };


    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = commandesUser.map((n) => n.number);
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

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - commandesUser.filter((value) => value.parent_id === 0).length) : 0;

    const filteredCommandes = applySortFilter(commandesUser.filter((value) => value.parent_id === 0), getComparator(order, orderBy), filterNumber);

    const isNotFound = !filteredCommandes.length && !!filterNumber;

    const Row = (props) => {
        const { row, selectedOrder, selectedUser, foundsParent } = props;
        /* eslint-disable camelcase */
        const { id, number, date_created, total, line_items, status, parent_id, currency, store } = row;

        const [currentCommamndeChild, setCurrentCommamndeChild] = useState(null);


        const [openChild, setOpenChild] = useState(null);
        const handleOpenMenuChild = (event, commandeObject) => {
            setOpenChild(event.currentTarget);
            setCurrentCommamndeChild(commandeObject);
        };

        const handleCloseMenuChild = () => {
            setOpenChild(null);
            setCurrentCommamndeChild(null);
        };

        return <TableBody>

            <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedOrder}>
                <TableCell padding="checkbox">
                    <Checkbox checked={selectedOrder} onChange={(event) => handleClick(event, number)} />
                </TableCell>

                <TableCell align="left"># N°{parent_id === 0 ? number : `${number} sous ${parent_id}`}</TableCell>

                <TableCell component="th" scope="row" padding="2">
                    <Stack direction="row" alignItems="center" spacing={2}>
                        {role === "USER" ?
                            <>
                                <Avatar src={selectedUser?.avatar_url} variant="circular" alt="photo URL" />
                                <Box>
                                    <Typography variant="subtitle2" noWrap>
                                        {store?.name ? store?.shop_name : "Fournisseur"}
                                    </Typography>
                                    <Typography variant="caption" noWrap>
                                        {store?.address?.city}
                                    </Typography>
                                </Box>
                            </> :
                            <>
                                <Avatar src={selectedUser?.avatar_url} variant="circular" alt="photo URL" />
                                <Box>
                                    <Typography variant="subtitle2" noWrap>
                                        {selectedUser?.username ? selectedUser?.username : "Visiteur"}
                                    </Typography>
                                    <Typography variant="caption" noWrap>
                                        {selectedUser?.email ? selectedUser?.email : ""}
                                    </Typography>
                                </Box>
                            </>
                        }
                    </Stack>
                </TableCell>

                <TableCell align="left">{date_created} </TableCell>

                <TableCell align="left">{total} {currency}</TableCell>
                <TableCell align="left">{line_items?.length}</TableCell>

                {!foundsParent ?
                    <TableCell align="left"><Label color={(status === 'outofstock' && 'error') || 'success'}>{status}</Label> </TableCell> :
                    <TableCell align="left"><Label variant="ghost" color="default" >Commande groupée</Label> </TableCell>
                }

                {
                    !foundsParent ?
                        <TableCell align="right">
                            <IconButton size="large" color="inherit" onClick={(e) => {
                                handleOpenMenu(e, row);
                            }}>
                                <Iconify icon={'mdi:eye'} />
                            </IconButton>
                        </TableCell> :
                        <TableCell align="right">
                            {
                                !openChild ?
                                    <IconButton size="large" color="inherit" onClick={(e) => {
                                        handleOpenMenuChild(e, row);
                                    }}>
                                        <Iconify icon={'fe:drop-down'} />
                                    </IconButton> :
                                    <IconButton size="large" color="inherit" onClick={(e) => {
                                        handleCloseMenuChild(e, row);
                                    }}>
                                        <Iconify icon={'fe:drop-up'} />
                                    </IconButton>
                            }
                        </TableCell>
                }
            </TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                <Collapse in={openChild} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1, backgroundColor: "#eee" }}>
                        <Typography variant="h6" gutterBottom component="div">
                            Details de la commande groupée
                        </Typography>
                        <Table size="small" aria-label="purchases">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Number</TableCell>
                                    <TableCell>{role === "USER" ? 'Fournisseur':'Beneficiaire'}</TableCell>
                                    <TableCell >date_created</TableCell>
                                    <TableCell >total</TableCell>
                                    <TableCell >line_items</TableCell>
                                    <TableCell >status</TableCell>
                                    <TableCell > </TableCell>
                                </TableRow>
                            </TableHead>

                            {
                                commandesUser.filter((value) => value.parent_id === currentCommamndeChild?.id).map((row) => {

                                    /* eslint-disable camelcase */
                                    const { id, number, date_created, total, line_items, status, currency, store } = row;

                                    return <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedOrder}>
                                        {/* <TableCell padding="checkbox">
                                            <Checkbox checked={selectedOrder} onChange={(event) => handleClick(event, number)} />
                                        </TableCell> */}

                                        <TableCell align="left"># N°{number}</TableCell>

                                        <TableCell component="th" scope="row" padding="2">


                                            <Stack direction="row" alignItems="center" spacing={2}>

                                                {role === "USER" ?
                                                    <>
                                                        <Avatar src={selectedUser?.avatar_url} variant="circular" alt="photo URL" />
                                                        <Box>
                                                            <Typography variant="subtitle2" noWrap>
                                                                {store?.name ? store?.shop_name : "Fournisseur"}
                                                            </Typography>
                                                            <Typography variant="caption" noWrap>
                                                                {store?.address?.city}
                                                            </Typography>
                                                        </Box>
                                                    </> :
                                                    <>
                                                        <Avatar src={selectedUser?.avatar_url} variant="circular" alt="photo URL" />
                                                        <Box>
                                                            <Typography variant="subtitle2" noWrap>
                                                                {selectedUser?.username ? selectedUser?.username : "Visiteur"}
                                                            </Typography>
                                                            <Typography variant="caption" noWrap>
                                                                {selectedUser?.email ? selectedUser?.email : ""}
                                                            </Typography>
                                                        </Box>
                                                    </>
                                                }
                                            </Stack>
                                        </TableCell>

                                        <TableCell align="left">{date_created} </TableCell>

                                        <TableCell align="left">{total} {currency}</TableCell>
                                        <TableCell align="left">{line_items?.length}</TableCell>

                                        <TableCell align="left"><Label color={(status === 'outofstock' && 'error') || 'success'}>{status}</Label> </TableCell>

                                        <TableCell align="right">
                                            <IconButton size="large" color="inherit" onClick={(e) => {
                                                handleOpenMenu(e, row);
                                            }}>
                                                <Iconify icon={'mdi:eye'} />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                }
                                )
                            }

                        </Table>
                    </Box>
                </Collapse>
            </TableCell>


            {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                </TableRow>
            )}
        </TableBody>
    }

    Row.propTypes = {
        row: PropTypes.shape({
            id: PropTypes.number.isRequired,
            parent_id: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
            total: PropTypes.number.isRequired,
            line_items: PropTypes.object.isRequired,
            date_created: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            store: PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                shop_name: PropTypes.string.isRequired,
                address: PropTypes.shape({
                    city: PropTypes.string.isRequired,
                    country: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,

            // foundsParent: PropTypes.object.isRequired,
            // price: PropTypes.number.isRequired,
            // protein: PropTypes.number.isRequired,
        }).isRequired,
        selectedUser: PropTypes.objectOf(
            PropTypes.shape({
                avatar_url: PropTypes.number.isRequired,
                username: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired,
            }),
        ).isRequired,
        selectedOrder: PropTypes.object.isRequired,
        foundsParent: PropTypes.number.isRequired,
    };


    return (
        <>
            <Helmet>
                <title> TRANSFORME | Mes Commandes </title>
            </Helmet>

            <Container >
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }} >
                    <Typography variant="h4" sx={{ mb: 1 }}>
                        Mes Commandes
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
                                    rowCount={commandesUser.filter((value) => value.parent_id === 0).length}
                                    numSelected={selected.length}
                                    onRequestSort={handleRequestSort}
                                    onSelectAllClick={handleSelectAllClick}
                                />

                                {filteredCommandes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    /* eslint-disable camelcase */
                                    // eslint-disable-next-line 
                                    const { id, number, customer_id, store } = row;

                                    const selectedOrder = selected.indexOf(number) !== -1;
                                    const selectedUser = customers.find((cus) => cus.id === customer_id);

                                    const foundsParent = commandesUser.find((parent) => (parent.parent_id === id));

                                    return <Row key={id} row={row} store={store} selectedOrder={selectedOrder} selectedUser={selectedUser} foundsParent={foundsParent} />
                                })}

                                {
                                    commandesUser.length === 0 && !isNotFound && (
                                        <TableBody>
                                            <TableRow>
                                                <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                                    <Paper
                                                        sx={{
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        <Typography variant="h6" paragraph>
                                                            Vous n'avez aucune commande
                                                        </Typography>

                                                        <Typography variant="body2">
                                                            Aucun résultat trouvé
                                                            <br /> Essayez de passer des commandes des produits disponibles dans notre central d'achat.
                                                        </Typography>
                                                    </Paper>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    )
                                }


                                {
                                    isNotFound && (
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
                                    )
                                }

                                {
                                    loading && (
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
                                    )
                                }



                            </Table>
                        </TableContainer>
                    </Scrollbar>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={commandesUser.filter((value) => value.parent_id === 0).length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Card>

            </Container>

        </>
    );
}
