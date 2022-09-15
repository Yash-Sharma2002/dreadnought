import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


import '../css/home.css'

export default function Home() {
    React.useEffect(() => {
        window.addEventListener('scroll', function () {
            var header = document.querySelector('#above-navbar');
            header.classList.toggle('sticky', window.scrollY > 0);
        })
    }, [])

    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    function redirect() {
        navigate('/dashboard')
    }
    return (
        <>
            <div id="above-navbar">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid ">
                        <a className="navbar-brand logo" href="/">Dreadnought</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item styler px-2">
                                    <p className="nav-link active" aria-current="page" style={{ cursor: 'pointer' }} onClick={handleClickOpen}>Login</p>
                                </li>
                                <li className="nav-item styler px-2">
                                    <p className="nav-link active" aria-current="page" style={{ cursor: 'pointer' }} onClick={handleClickOpen}>Signup</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="top">
                <div className="card-decider">
                    <div className="card">
                        <div style={{ textAlign: 'center', margin: 'auto', padding: '10px' }}>
                            <p className=" logo">Dreadnought</p>
                            <h3 className="my-3" style={{ color: 'white' }} >School for Deep Tech founders</h3>
                        </div>
                        <p className="signup" style={{ cursor: 'pointer' }} onClick={handleClickOpen}>Signup</p>
                    </div>
                </div>
            </div>

            <div className="rest-details">
                <p className="about">
                    We believe <strong>humanity's survival</strong> depends on us being a <strong>spacefaring
                        civilisation</strong> and future deep tech founders
                    will lead the way.
                    <br />
                    <br />
                    <strong>Get paid to learn</strong> the initial 2 months of founder journey that covers everything other than
                    engineering. We
                    trust your coding skills.
                </p>
                <div className="data-item bg">
                    <p className="head">Social Initiative By</p>
                    <div className="main d-flex justify-content-between align-items-center">
                        <div>
                            <img src="https://cdn.fs.teachablecdn.com/iHpm1TXUQQeQk6PQVAMw" alt="AI" />
                            <p className="subtext">AI for Good Foundation</p>
                        </div>
                        <div>
                            <img src="https://cdn.fs.teachablecdn.com/2GJ3PRzFSAyZblVHipUF" alt="Y Combinator" />
                            <p className="subtext">Y Combinator</p>
                        </div>
                        <div>
                            <img src="https://cdn.fs.teachablecdn.com/xOBdZe6Q1GYXG5bPyTFS" alt="Stanford" />
                            <p className="subtext">Stanford University</p>
                        </div>
                    </div>
                </div>
                <div className="data-item">
                    <p className="head">About Dreadnought</p>
                    <p className=" w-50 m-auto my-2 text-center">Our team is comprised of digitally-native entrepreneurs, futurists
                        and operators with
                        strengths in AI, Space Tech, Genomics, AR/VR and Longevity. We decided to launch Dreadnought to super
                        charge the future by helping unlock the potential of future deep tech entrepreneurs.</p>
                    <div className="main d-flex justify-content-between align-items-center">
                        <div>
                            <img src="https://cdn.fs.teachablecdn.com/wgiet3NFRvO2zWrAf7n6" alt="Bailee Cooper" />
                            <p className="subtext">Bailee Cooper</p>
                            <p className=" w-75 m-auto my-2 text-center">Technophile. Left Brain. Space Nerd. UC Berkeley Alum.</p>
                        </div>
                        <div>
                            <img src="https://cdn.fs.teachablecdn.com/pSMNpPEQ7qEAhujaurRp" alt="Jason Miller" />
                            <p className="subtext">Jason Miller</p>
                            <p className=" w-75 m-auto my-2 text-center">Futurist. Entrepreneur. Hardcore Nerd. Stanford Alum.</p>
                        </div>
                        <div>
                            <img src="https://cdn.fs.teachablecdn.com/44zQyTIPT5a8nqK2bkUX" alt="Ragini Malhotra" />
                            <p className="subtext">Ragini Malhotra</p>
                            <p className=" w-75 m-auto my-2 text-center">AI Researcher. Right Brain. Loves Dogs. MIT Alum.</p>
                        </div>
                    </div>
                </div>

                <div className="data-item bg">
                    <p className="head">Student Experiences</p>
                    <div className="main d-flex justify-content-between align-items-center">
                        <div>
                            <img src="https://cdn.fs.teachablecdn.com/A2GPqp7OSrqIi7vEA4VY" alt="Rob Nielsen" />
                            <p className="subtext">Rob Nielsen</p>
                            <p className=" w-75 m-auto my-2 text-center">Sophomore year student at MIT says, 'I have been coding
                                since I was 12 but this course blew my mind away because now I know no fear. I can keep
                                launching again and again till I win. The startup lessons are invaluable and practical.'</p>
                        </div>
                        <div>
                            <img src="https://cdn.fs.teachablecdn.com/Uf8ZAKWtTGGO8jPVyzi3" alt="Rashmi Tirke" />
                            <p className="subtext">Rashmi Tirke</p>
                            <p className=" w-75 m-auto my-2 text-center">Final year student at IIT Madras says, 'I almost gave up
                                but then I realised that if I can't build these things in a controlled learning environment then
                                I am not going to survive as an entrepreneur in the real world. I am far more confident now.'
                            </p>
                        </div>
                        <div>
                            <img src="https://cdn.fs.teachablecdn.com/TdbTrEo5TkGv40hXNrCN" alt="Rashmi Tirke" />
                            <p className="subtext">Rashmi Tirke</p>
                            <p className=" w-75 m-auto my-2 text-center">First year student at Cambridge says, 'I learnt so much and
                                I plan to use the money I earned as a seed money for my startup. The smartest thing I did was to
                                refer my friends as it increased my earnings and now we are working together.'</p>
                        </div>
                    </div>
                </div>

                <div className="data-item bg-2">
                    <p className="head" style={{ color: 'white' }}>Sign up to learn and earn</p>
                    <p className=" w-75 m-auto my-1 text-center" style={{ color: 'white' }}>Course enables future founders to learn how
                        to launch quickly as most first time founders pivot 4 to 5 times before achieving product-market fit.
                    </p>
                    <a href="/">
                        <div className="main-2">
                            <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/mzBHDQYXTCqItjILj7OI"
                                alt="Robot" className="my-2" />
                            <p className="subtext">Future Deep Tech Founders</p>
                            <p className=" w-100 m-auto my-2 text-center">
                                Everything you need to know about building startup other than coding. Milestone based earnings
                                upto USD $1000.
                            </p>
                            <section className=" provider d-flex justify-content-between align-items-center w-75 m-auto my-1">
                                <div className=" d-flex justify-content-between align-items-center">
                                    <img src="https://cdn.fs.teachablecdn.com/pSMNpPEQ7qEAhujaurRp" alt="Jason Miller" />
                                    <p className="subtext mx-2">Jason Miller</p>
                                </div>
                                <p className="subtext mx-2">Free</p>
                            </section>
                        </div>
                    </a>
                </div>
            </div>

            <Dialog
                fullWidth='md'
                open={open}
                onClose={handleClose}
                maxWidth='md'

                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }} id="responsive-dialog-title">
                    {"Log in / Sign up"}
                    <CloseOutlinedIcon sx={{cursor:'pointer'}} onClick={handleClose} />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ display: 'block', textAlign: 'center', width: "100%" }}>
                        <TextField sx={{ my: 3, width: '95%', }}
                            required
                            variant='standard'
                            id="standard-helperText"
                            placeholder="Enter name"
                        />
                        <br />
                        <TextField sx={{ my: 3, width: '95%', }}
                            required
                            variant='standard'
                            type="password"
                            // id="standard-helperText"
                            placeholder='Password'
                            autoComplete="current-password"
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={() => { handleClose(); redirect(); }} >
                        Stimulate Sign in
                    </Button>
                </DialogActions>
            </Dialog>

        </>

    )
}
