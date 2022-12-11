import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function BasicCard(props) {
  return (
    <div className=' my-3' onClick={props.sub}>
    <Card sx={{ minHeight: 320, width: '100%' }}>
      <CardCover>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/8/8a/ICT_university_P_Mbarika.jpg"
          srcSet={ props.link}
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.0), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          Name: {props.name}
        </Typography>
        <Typography
          
          textColor="#D3D3D3"
        >
           Votes: #{props.id}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
