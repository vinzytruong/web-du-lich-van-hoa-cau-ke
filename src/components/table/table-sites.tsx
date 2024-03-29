import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
// import { data as rows } from '@/data/tourist-attraction.data';
import { Product } from '@/interfaces/product';
import { StyledButton } from '../styled-button';
import { Rating, TablePagination, createStyles, withStyles } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TableHeader from './table-head';
import TableBodyCustom from './table-body';
import { ListProducts } from '@/store/product/reducer';
import { Sites } from '@/interfaces/site';
import TableBodySites from './table-body-sites';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array?.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Sites;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'photo',
        numeric: false,
        disablePadding: true,
        label: 'HÌnh ảnh',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Tên',
    },
    {
        id: 'category',
        numeric: false,
        disablePadding: false,
        label: 'Loại',
    },
    {
        id: 'address',
        numeric: true,
        disablePadding: false,
        label: 'Địa chỉ',
    },
    {
        id: 'description',
        numeric: true,
        disablePadding: false,
        label: 'Mô tả',
    }
];

const TableSites = (rows: any, isAdmin: any) => {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Product>('name');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [viewId, setViewId] = React.useState(0)
    const [editId, setEditId] = React.useState(0)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const visibleRows = React.useMemo(
        () =>
            stableSort(rows.data, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Box sx={{ overflow: "auto", py: 3 }}>
            <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                <TableContainer sx={{ border: 0 }}>
                    <Table
                        sx={{ minWidth: 750, border: 0 }}
                        aria-labelledby="tableTitle"
                        size='medium'
                    >
                        <TableHeader
                            order={order}
                            orderBy={orderBy}
                            handleOrder={setOrder}
                            handleOrderBy={setOrderBy}
                            rowCount={rows.length}
                            headerCells={headCells}
                        />

                        <TableBodySites
                            data={visibleRows}
                            handleView={setViewId}
                            handleEdit={setEditId}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            viewLink=''
                            editLink='/edit-sites'
                            isAdmin={isAdmin}
                        />


                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage={<span>Hiển thị số dòng</span>}
                    labelDisplayedRows={({ from, to, count }) => <span>{from}-{to} trong số {count} sản phẩm</span>}
                />
            </Box>
        </Box>
    );
}
export default TableSites

