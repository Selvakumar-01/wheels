import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const wheelData = [
    {
        img: 'https://i.ibb.co/jgvrbMt/wgu.png',
        title1: '17-INCH CAST ALUMINUM WHEEL,FULLY',
        title2: 'PAINTED SILVER LITHO',
        subtitle: 'Standard on touring FWD',
        code: '(WGU)',
    },
    {
        img: 'https://i.ibb.co/c67mL5X/wjr.png',
        title1: '17-INCH CAST DIAMOND - CUT WHEEL',
        title2: 'WITH METALLIC GREY POCKETS',
        subtitle: 'Standard on touring L FWD/Hybrid and Touring Hybrid',
        code: '(WJR)',
    },
    {
        img: 'https://i.ibb.co/gdGYDwz/wp6.png',
        title1: '18-INCH CAST ALUMINUM WHEEL WITH',
        title2: 'FORESHADOW FINISH',
        subtitle: 'Included with S Appearance Package on Touring Hybrid, Limited Hybrid',
        code: '(WP6)',
    },
    {
        img: 'https://i.ibb.co/stc7JWv/wpf.png',
        title1: '17-INCH CAST ALUMINUM WHEEL,FULLY',
        title2: 'PAINTED SILVER LITHO',
        subtitle: 'Standard on touring FWD',
        code: '(WGU)',
    }
];



export default function Wheel() {

    const [activeIndex, setActiveIndex] = useState(0);

    const clickLeft = () => {
        if (activeIndex > 0) {
            setActiveIndex((prevIndex) => prevIndex - 1);
        }
    };

    const clickRight = () => {
        if (activeIndex < wheelData.length - 1) {
            setActiveIndex((prevIndex) => prevIndex + 1);
        }
    };


    return (
        <Box
            sx={{
                height: '100vh',
                backgroundImage: `url('https://i.ibb.co/n8whhx7/bg-cover.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Grid container spacing={0} sx={{ mt: 2 }}>
                <Grid item size={0.05} sx={{ backgroundColor: 'black', ml: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}></Grid>
                <Grid item size={10} sx={{ ml: 1, display: 'flex', alignItems: 'center', justifyContent: 'left' }} >
                    <Typography variant="body1" sx={{ color: 'gray', fontWeight: 'bold' }} >
                        WHEELS
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item size={6}>
                    <Typography variant="body1" sx={{ mt: 3, ml: 2.5, color: 'gray' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium et esse ea sit.
                        Magni unde modi error omnis nulla inventore pariatur aliquam.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1} sx={{ mt: 15 }} >
                <Grid item size={0.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconButton onClick={clickLeft} >
                        <ChevronLeftIcon sx={{ cursor: activeIndex === 0 ? 'not-allowed' : 'pointer', color: activeIndex === 0 ? 'grey' : 'black' }} />
                    </IconButton>
                </Grid>
                {wheelData.map((item, index) => (
                    <Grid item size={2.75} key={index} sx={{ position: 'relative' }}>
                        <Box
                            sx={{
                                height: 390,
                                width: 210,
                                backgroundImage: activeIndex === index ? `url('https://i.ibb.co/fGnkLmy/wheel-bg.jpg')` : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 2,
                                borderRadius: 1,
                                boxShadow: 3,
                                overflow: 'hidden',
                                textAlign: 'center',
                            }}
                        >
                            <img
                                src={item.img}
                                alt="Foreground"
                                style={{
                                    width: '80%',
                                    height: 'auto',
                                    marginBottom: 8,
                                    transition: 'transform 0.4s ease',
                                    transform: activeIndex === index ? 'scale(1.1)' : 'scale(1)',
                                }}
                            />
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {item.title1}
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {item.title2}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.subtitle}
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {item.code}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
                <Grid item size={0.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconButton onClick={clickRight} >
                        <ChevronRightIcon
                            sx={{ cursor: activeIndex === wheelData.length - 1 ? 'not-allowed' : 'pointer', color: activeIndex === wheelData.length - 1 ? 'grey' : 'black' }} />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
}