import React, { Suspense, useRef, useEffect } from 'react';
import { Box, Drawer, AppBar, Toolbar, List, Typography, Badge, CircularProgress, ListItem, ListItemButton, TextField, Accordion, AccordionSummary, AccordionDetails, Tooltip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';


import '../css/override.css'

const Dashboard = React.lazy(() => import('../components/Dashboard'));
const Milestones = React.lazy(() => import('../components/Milestones'));
const MyAchievements = React.lazy(() => import('../components/MyAchievements'));
const AllCourses = React.lazy(() => import('../components/AllCourses'));
const SubscribedCourses = React.lazy(() => import('../components/SubscribedCourses'));
const Assets = React.lazy(() => import('../components/Assets'));
const Assignments = React.lazy(() => import('../components/Assignments'));
const NewEarnings = React.lazy(() => import('../components/NewEarnings'));
const TotalEarnings = React.lazy(() => import('../components/TotalEarnings'));
const Investments = React.lazy(() => import('../components/Investments'));
const ReferNEarn = React.lazy(() => import('../components/ReferNEarn'));
const HelpSupport = React.lazy(() => import('../components/HelpSupport'));



// 1 - Dashboard
// 2 - Milestones
// 3 -  My Achievements
// 4 - Courses -> All Courses
// 5 - Courses -> Subscribed Courses
// 6 - Courses -> Assets
// 7 - My Earnings  -> New Earnigns
// 8 - My Earnings -> Total Earnigns
// 9 - My Earnings -> Investments
// 10 - My 
// 11 - My Investments
// 12 - Help/Support

const drawerWidth = 240;
const highlightedStyle = { fontWeight: 600, color: '#000', margin: '5px 0', fontFamily: 'Jost' }
const normStyle = { margin: '5px 0', fontFamily: 'Jost' }



export default function MainDashboard() {

    document.title = "Dashboard"

    const [display, setDisplay] = React.useState(1);
    const [query, setQuery] = React.useState('');
    const [searchIcon, setSearchIcon] = React.useState(false);
    const [dataList, setDataList] = React.useState([]);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    // dropdowns functions
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    function removeAttr(id, name, num) {
        document.getElementById(id).classList.remove(name)
        // if (!(document.getElementById(id).classList.value.includes(name))) {
            setDisplay(num)
        // }
    }

    function removeQuery() {
        setQuery('')
        setSearchIcon(false)
    }

    const handleQuery = async (e) => {
        setQuery(e.target.value);
        getData(e.target.value)
    }


    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    removeQuery()
                    getData('')
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    async function getData(filter) {
        await fetch(`https://staging.staging.b2brain.com/search/autocomplete_org_all/?q=${filter}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => response.json())
            .then(data => {
                setDataList(data)
            }
            );
    }



    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#fff', color: 'black', justifyContent: 'space-between' }}
            >
                <Toolbar>
                    {
                        searchIcon ?
                            <ClearIcon sx={{ mr: 2, cursor: 'pointer' }} onClick={removeQuery} /> :
                            <SearchOutlinedIcon sx={{ mr: 2, cursor: 'pointer' }} />
                    }
                    <TextField
                        id="standard-helperText"
                        variant="standard"
                        placeholder='Search Courses'
                        value={query}
                        ref={wrapperRef}
                        sx={{ width: '90%' }}
                        onFocus={() => { setSearchIcon(true); setDisplay(4); getData(''); }}
                        onChange={(e) => { handleQuery(e) }}
                    />
                    <Box sx={{ mr: 3, ml: 'auto', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Box sx={{ mx: 2 }}>
                            <Tooltip title="Any Notification" placement="bottom">
                                <Badge color="secondary" badgeContent=" " variant="dot">
                                    <Box sx={{ background: '#EFF3F9', padding: '4px 7px', }}>
                                        <NotificationsNoneOutlinedIcon />
                                    </Box>
                                </Badge>
                            </Tooltip>
                        </Box>
                        <Box>
                            <Tooltip title="User Image" placement="bottom">
                                <img src={require('../assets/icons/Logo.png')} alt="logo" width='35' style={{ marginTop: '5px' }} />
                            </Tooltip>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxShadow: 4,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar sx={{ justifyContent: 'space-around', py: 3 }}>
                    <Tooltip title="Logo" placement="bottom">
                        <Typography variant="h5" noWrap sx={{ cursor: 'pointer' }}>
                            Dreadnought
                        </Typography>
                    </Tooltip>
                </Toolbar>
                <List>
                    <ListItem disablePadding onClick={() => setDisplay(1)}>
                        <ListItemButton >
                            <ListItemIcon>
                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            <Typography sx={display === 1 ? highlightedStyle : normStyle} >
                                Dashboard
                            </Typography>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding onClick={() => removeAttr('Milestone', 'Milestones', 2)}>
                        <ListItemButton >
                            <ListItemIcon>
                                <StarBorderOutlinedIcon />
                            </ListItemIcon>
                            <Typography id="Milestone" sx={display === 2 ? highlightedStyle : normStyle} className={'Milestones'} >
                                Milestones
                            </Typography>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding onClick={() => removeAttr('Achievement', 'achievements', 3)}>
                        <ListItemButton >
                            <ListItemIcon>
                                <EmojiEventsOutlinedIcon />
                            </ListItemIcon>
                            <Typography id="Achievement" sx={display === 3 ? highlightedStyle : normStyle} className={'achievements'} >
                                Achievements
                            </Typography>
                        </ListItemButton>
                    </ListItem>

                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon onClick={() => setDisplay(4)} />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            sx={{ alignItems: 'center' }}
                        >
                            <ListItem disablePadding onClick={() => setDisplay(4)}>
                                <ListItemButton >
                                    <ListItemIcon>
                                        <AccountTreeOutlinedIcon />
                                    </ListItemIcon>
                                    <Typography sx={display > 3 && display < 7 ? highlightedStyle : normStyle}  >
                                        Courses
                                    </Typography>

                                </ListItemButton>
                            </ListItem>
                        </AccordionSummary>

                        <AccordionDetails sx={{ borderLeft: '3px solid #e5e5e5', ml: 3.2 }}>
                            <List>
                                <ListItem disablePadding sx={{ my: 1 }} onClick={() => setDisplay(4)}>
                                    <ListItemButton >
                                        All Courses
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding sx={{ my: 1 }} onClick={() => setDisplay(5)}>
                                    <ListItemButton >
                                        Subscribed Courses
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding sx={{ my: 1 }} onClick={() => setDisplay(6)}>
                                    <ListItemButton >
                                        Assets
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon onClick={() => setDisplay(7)} />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                            sx={{ alignItems: 'center' }}
                        >
                            <ListItem disablePadding onClick={() => setDisplay(7)}>
                                <ListItemButton >
                                    <ListItemIcon>
                                        <AttachMoneyOutlinedIcon />
                                    </ListItemIcon>
                                    <Typography sx={display > 6 && display < 10 ? highlightedStyle : normStyle}  >
                                        Earnings
                                    </Typography>

                                </ListItemButton>
                            </ListItem>
                        </AccordionSummary>

                        <AccordionDetails sx={{ borderLeft: '3px solid #e5e5e5', ml: 3.2 }}>
                            <List>
                                <ListItem disablePadding sx={{ my: 1 }} onClick={() => setDisplay(7)}>
                                    <ListItemButton >
                                        New
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding sx={{ my: 1 }} onClick={() => setDisplay(8)}>
                                    <ListItemButton >
                                        Total
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding sx={{ my: 1 }} onClick={() => setDisplay(9)}>
                                    <ListItemButton >
                                        Investments
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>


                    <ListItem disablePadding onClick={() => removeAttr('assignments', 'achievements', 10)}>
                        <ListItemButton >
                            <ListItemIcon>
                                <LinkOutlinedIcon />
                            </ListItemIcon>
                            <Typography id="assignments" sx={display === 10 ? highlightedStyle : normStyle} className="achievements">
                                Assigments
                            </Typography>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding onClick={() => setDisplay(11)}>
                        <ListItemButton>
                            <ListItemIcon>
                                <GroupsOutlinedIcon />
                            </ListItemIcon>
                            <Typography sx={display === 11 ? highlightedStyle : normStyle} >
                                Refer & Earn
                            </Typography>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding onClick={() => setDisplay(12)}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ChatOutlinedIcon />
                            </ListItemIcon>
                            <Typography sx={display === 12 ? highlightedStyle : normStyle} >
                                Help/Support
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Box sx={{ width: `calc(100% - ${drawerWidth}px)`, marginLeft: 'auto', marginRight: 0 }}>
                <Suspense fallback={<div style={{ position: "absolute", top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}><CircularProgress /></div>}>
                    {
                        display === 1 ? <Dashboard /> :
                            display === 2 ? <Milestones /> :
                                display === 3 ? <MyAchievements /> :
                                    display === 4 ? <AllCourses dataList={dataList} setDisplay={setDisplay} /> :
                                        display === 5 ? <SubscribedCourses /> :
                                            display === 6 ? <Assets /> :
                                                display === 7 ? <NewEarnings /> :
                                                    display === 8 ? <TotalEarnings /> :
                                                        display === 9 ? <Investments /> :
                                                            display === 10 ? <Assignments /> :
                                                                display === 11 ? <ReferNEarn /> :
                                                                    display === 12 ? <HelpSupport /> :
                                                                        null
                    }
                </Suspense>
            </Box>
        </Box >
    );
}
