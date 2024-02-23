import { useEffect, useRef, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
    Avatar,
    ClickAwayListener,
    Grid,
    ListItemButton,
    ListItemText,
    Paper,
    Popper,
    Typography,
    useMediaQuery,
    Box,
    Card,
    FormControlLabel,
    Switch,
    Fade
} from '@mui/material';
import { navigations } from '@/components/navigation/navigation.data';
import Link from 'next/link';


// ==============================|| SEARCH INPUT - MEGA MENu||============================== //
const NavItem = styled(Box)(({ theme }) => ({
    cursor: 'pointer',
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.contrastText,
    '&:hover': {
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.light
    }
}));

const MegaMenuSection = ({ idx }: any) => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = useState(false);
    const anchorRef = useRef<any>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event: React.MouseEvent<HTMLDivElement> | MouseEvent | TouchEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        matchDownMd && open && setOpen(false);
        // eslint-disable-next-line
    }, [matchDownMd]);
    const matchesXs = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <NavItem
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <Typography>{navigations[idx]?.label}</Typography>

            </NavItem>
            <Popper
                sx={{ zIndex: 100, }}

                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                placement={'bottom-end'}
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [matchesXs ? 5 : 0, 20]
                            }
                        }
                    ]
                }}

            >
                {({ TransitionProps }) => (
                    <ClickAwayListener onClickAway={handleClose}>

                        <Box sx={{ display: 'flex' }}>
                            <Fade in={open} {...TransitionProps}>
                                <Paper
                                    sx={{
                                        width: {
                                            md: `calc(100vw - 100px)`,
                                            lg: `calc(100vw - 100px)`,
                                            xl: `calc(100vw - 140px)`
                                        },
                                        maxWidth: { xl: 300, md: 300 },

                                    }}
                                >
                                    {open && (
                                        <Card
                                            // border={false}
                                            elevation={16}
                                            // content={false}
                                            // boxShadow
                                            // shadow={theme.shadows[16]}
                                            sx={{ overflow: { p: 3, xs: 'visible', md: 'hidden', backgroundColor: 'primary.main' } }}
                                        >
                                            <Grid container sx={{ backgroundColor: 'primary.main' }}>
                                                <Grid item md={12}>
                                                    {navigations.map(item => (
                                                        <>
                                                            {item.children?.map(((child: any, index: any) => (
                                                                <Link style={{ textDecoration: 'none' }} href={child.path} key={index}>
                                                                    <ListItemButton disableRipple>
                                                                        <ListItemText sx={{ color: 'primary.contrastText' }} primary={child?.label} />
                                                                    </ListItemButton>
                                                                </Link>

                                                            )))}
                                                        </>
                                                    ))}
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    )}
                                </Paper>
                            </Fade>
                        </Box>


                    </ClickAwayListener>
                )}
            </Popper>
        </>
    );
};

export default MegaMenuSection;
