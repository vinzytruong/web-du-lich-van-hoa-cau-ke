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
import { data as rows } from '@/data/ocop-product.data';
import { Product } from '@/interfaces/product';
import { StyledButton } from '../styled-button';
import { Rating, TablePagination, createStyles, withStyles } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TableHeader from './table-head';
import { useRouter } from 'next/router';


interface BodyDataProps {
    handleView: (e: any) => void;
    handleEdit?: (e: any) => void;
    data: any;
    page: number;
    rowsPerPage: number
    editLink?: string
    viewLink: string,
    isAdmin: boolean
}


const TableBodyCustom = (props: BodyDataProps) => {
    const { data, handleEdit, handleView, page, rowsPerPage, editLink, viewLink, isAdmin } = props
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    const router = useRouter()
    const handleViewItem = (e: React.MouseEventHandler<HTMLTableRowElement> | undefined, id: any) => {
        handleView(id);
        router.push(`${viewLink}?id=${id}`);
    }
    const handleEditItem = (e: React.MouseEventHandler<HTMLTableRowElement> | undefined, id: any) => {
        if (isAdmin) {
            handleEdit && handleEdit(id);
            router.push(`${editLink}?id=${id}`);
        }
    }
    return (
        <TableBody>
            {data?.map((row: any, index: any) => (
                <StyledTableRow
                    hover
                    onClick={(e: any) => handleViewItem(e, row.id)}
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: 'pointer' }}
                >
                    <StyledTableCell padding="normal">
                        {page > 0 ? (page * (rowsPerPage) + index + 1) : index + 1}
                    </StyledTableCell>
                    <StyledTableCell padding='none'>{row.name}</StyledTableCell>
                    <StyledTableCell align="left">{row.author}</StyledTableCell>
                    <StyledTableCell align="left">{row.address}</StyledTableCell>
                    <StyledTableCell align="right">
                        <Rating
                            name="read-only"
                            value={row.star}
                            readOnly

                        />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                        <Box display='flex' gap={2} alignItems='center' justifyContent='center'>
                            {isAdmin === true &&
                                <>
                                    <StyledButton
                                        onClick={(e: any) => handleEditItem(e, row.id)}
                                    >
                                        Chỉnh sửa
                                    </StyledButton>
                                    <StyledButton
                                        variant='outlined'
                                        onClick={(e: any) => handleViewItem(e, row.id)}
                                    >
                                        Xem
                                    </StyledButton>
                                </>

                            }

                            <StyledButton

                                onClick={(e: any) => handleViewItem(e, row.id)}
                            >
                                Xem
                            </StyledButton>

                        </Box>


                    </StyledTableCell>
                </StyledTableRow>

            ))}
            {emptyRows > 0 && (
                <StyledTableRow style={{ height: 53 * emptyRows }}>
                    <StyledTableCell colSpan={6} />
                </StyledTableRow>
            )}
        </TableBody>
    )
}
export default TableBodyCustom;

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        border: 0,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,

    },
}));