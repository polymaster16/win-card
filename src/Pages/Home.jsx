import * as React from 'react';
import '../index.css';
import Button from '@mui/material/Button';
import FadeIn from 'react-fade-in';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PaymentsIcon from '@mui/icons-material/Payments';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'https://www.bridgemi.com/sites/default/files/styles/full_width_image/public/2022-10/voting%20shutterstock.jpg?itok=6uyACcqt',
    title: 'Vote Now',
    width: '33%',
    nav: '/Main'
  },
  {
    url: 'https://cdn.broadsheet.com.au/cache/26/b6/26b60e09611b5e009c1251fcd92176ce.jpg',
    title: 'Gallery',
    width: '34%',
    nav: '/Gallery',
  },
  {
    url: 'https://media.istockphoto.com/id/1187116240/photo/finance-trade-manager-analysing-stock-market-indicators-for-best-investment-strategy.jpg?s=612x612&w=0&k=20&c=lBWsfG5n1YCHENu_Xj5ZeSjzxchOUjlrxlSwYCY8O6A=',
    title: 'Stats',
    width: '33%',
    nav: '/Stats',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 500,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 300,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));








function HomePage() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    return (
    <
    >
  < FadeIn
    delay={1100}>

<Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick = {()=>navigate(image.nav)}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    </FadeIn>

</>
  

  );
}

export default HomePage;