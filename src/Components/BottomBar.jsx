import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import Sheet from '@mui/joy/Sheet';
import TextField from '@mui/joy/TextField';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import '../index.css'

const data = [
  {
    src:'https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/318487686_101671722801509_817116499639372504_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG9mT76lKI2qvQsu77J348JJ5bw6bWMQ_8nlvDptYxD_4ZhSb3KZVYyODGbOeopo1Lcq-suPU5XmOtfkbEZn74d&_nc_ohc=Y15Ez-LeGtsAX-fDqey&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfCYymXwFnKzKkrvVDCEFCbYGPoIeCJPYuAQiyEGSrt_YA&oe=639B2A79',
    title: 'Miss masters ICTU',
    description: 'miss masters of the ICT university',
  },
  {
    src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0UEA8OFA0NDRYNEA0NFg4NDRINDQ0NFhcYIxgWFhcZKSkhGRsmHBoYIzIiJiosLy8vGSA1OjUtOSkuLywBCgoKDg0OHBAQHC4gIB4uLi4uLi4uLi4sLi4uLi4uLi4uLi4uLiwuLiwuLy4uLi4uLC4uLi4uLi4uLC4uLi4uLv/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEDBAUGAgj/xABREAABAwICBQULBwgHCAMAAAABAAIDBBEFEgYHEyExIkFRYZEUQlJxcoGCkqGxwTJUYoOTorIVI1NVc8LR0ggWJEWUo8M0Q0RjhLPh8CUzZP/EABsBAQACAwEBAAAAAAAAAAAAAAAEBQIDBgEH/8QANxEAAgECBAIIAwUJAAAAAAAAAAECAxEEEiExBVFBYXGBkaGxwRMiMlKS0eHwFCQzQlNigrLS/9oADAMBAAIRAxEAPwCcUREAVFVEBrMWxamp2bWaVsTScgJu4l282AAJJ3Hh0LVU+mtA9zAHTASubG17qeRsTpCbAZzu47lpdb1M400Eo+THK4HqLm7j923pKM8PgmlkjiiBe5zmZGB3fcfELWvfqUepWlGVki8wPC6NfD/ElJp635JLu7z6NuqrEoxIGNzlpflbnLLhhksMxaDzXustSCjCIiAIiIAiIgKXRaLSnH2UcIndE+bNIIg1hA5RDjck8ByStRRaw6EtzS3p78GhwmJ8Ybvb6QCxc4p2uSKeEr1IZ4RbTdtNXfs38jtUVtjwd44WuFcWRHCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDmNYrAcNqr8zY3Dyg9tio71XT5cRY219rHM3yeTmv923nUg6yHWw2p+oHbKwKItHK7Y1dPPzRysc7yC6zvulyiVnaomdJwyk6mBqQ5uX+qsfQwVV5BXpSzmwqKqsyzNb4+gIC6qrXy1JP0Qsmmku3rCAvoipdAcbrQpi/D3ODrCGSOVzd3LaeTbzF4PmUU4Fhb6ieOmbxc4Au47No4k9Q/h0qQNbuKWjiomnfIdu/yBcNB8ZufQXrVDQtENRVEcqSQQg9DA1pNvGXfdCiVIqdXKdJg60sJw51X0t5e+yXo32dpIMEYa0NHBoDR5IG5XlQKqlnNhERAEREAREQBERAEREAREQBERAEREAREQBERAEREBz+nNPnw6rHRFtPUId+6oIIsfEV9F4hC18M0R4SRysPic0gr5z6b9aiYlapnTcAm/hzjyafin/yT3ojXCaippb3/ADTIz+0YMrvaD2rcSStbx/8AKjHVXi5AmoyeP9pb7A4D7p7V3hUinLNFMpMdQ+DiJw6L3XY9V4bdxflqnHhyR95WERZkQK7TyZXdR3FWkQG3Xgutx3K1SyXHWP8A0Ll9Y+M7CjcxrrSVeaFtuIZ37uw28bgsZSyq5toUZVqkacd5O367NyLdK8V7oq55u9c/Iz9mNzLeO1/SKlDVZHbDgfDmmd2ED91Q00OJtbMScoaO+dzAL6C0doNhSwQbrxRtDuuQ73n1iVFw93JyOi40408NCkuat2RX5o2qIimHMBERAEREAREQBERAEREAREQBERAEREAREQBEXh0gHEoD2vEkgHFYstUebcsYm6AyJaq/DcPvL5+xOndHPPGf91LIz1SQPcp5USaw6HZ1z3c08bZR5RBv94OPnUfEq8Uy84FUy1pQf8yv3r8mzWaM1+xq4Je9a9rHdcbtz/YSfMptXz90dW9TZorX7ajp5M2Y5GRu/at3O7bX86xw0t0buO0foq/4v1XuZeJYhDBGZpHhjWes53MAOcnoXJjWPT57dyzZb8czNp48v/lc3p/jBmqXQh3IpS6IN718jdznePiPEOtcwvJ13f5TPBcIpSpKVa7cle17WT226bb9enQT1Q1kU0bJo3h7HjMHD2g9BHQr6jrVdiJEklMTyXM2zG+C9pANvGCPVUiqRTnmjcpMZhv2as6d78ux/q3ce4pMpueHP5PSoa02xzuqre8O/Nx/mo+tgO8+kbnxW6F1msbH9m00cbuVMM0jm97EeA8bvcOtRqo+IqX+VF3wXB5Y/Hlu/p7Off6dpvtBKTaYjTNIuGPM32YLh7gPOp4CiPVFS5qqaa26GEs9J7hb2McpcC2YdWhchcbqZsRl+yl4vX0a8iqIi3lOEREAREQBERAEREAREQBERAEREAREQBERAFjVcdxfo9yyVQhAapF7mjykjs8leEAXC606K8UE4HyHuiPicCR+E9q7lanS2i21HURgZjkMg8tguB57W86wqK8GiVgaypYiE30PXsej8mQou21a4yGSmke7KJzdmb5LZxuA9IW87R0riuroRruj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',
    title: 'The ICTU SUG',
    description: 'Student union goverment of the ICT university',
  },

  {
    src: 'https://timesnews2.info/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-11-at-3.33.30-PM-1.jpeg',
    title: "The ICT University.",
    description: 'University based in Yaoundé, Cameroon',
  },
  
{
src: 'https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/319152987_101671782801503_4112830101354635950_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHUP6BiqfmaO2qfYXrHIjVESSn8bcxxg9xJKfxtzHGD3C6Ww5c0V64CQxlKPdEVjjMn87E-HnnH3R-ZWTBty4k0&_nc_ohc=q52fjTj9BZUAX_WSnDM&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfAiu5QDjFiveD7yiCaWyZNDOyQwYY2BVgWzFj-ZVjlbmQ&oe=639B0B47',
title: 'MHEL-SUBLIME'
},

{
  src: 'https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/319321640_101672062801475_8156827172212614396_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGF-xq7u8Ws7lb_jLMGpWUQiyfFE_6QxsSLJ8UT_pDGxOfwOkDqQgetodUZQIzNt2PVdMmtTOjQUv2VHB2IREb-&_nc_ohc=QOoYAoKJHokAX8cPJmf&tn=9qEYC6OBv9TrTH3A&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfDfCzRYsDgH1CW8Ck7EiRczsWvproMRFqK1WkKex1HZWQ&oe=639BE829',
  title:  'Cool kicks K.mer',
},

{
  src: 'https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/319439826_101672069468141_7796710713222828358_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEmgAltrdSN2CppYJBx5ru8w_NPVGxqearD809UbGp5qoOAMtDRwO9a25qgGxCbeLgDKWtMn64MjRzFUg6eKNJz&_nc_ohc=Gbm-1Z1xnH0AX8tFax4&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfD5sjzaRobNfwgDm9Oy9t5RHBSNrocvB4WkNhRTBG0Cuw&oe=639A7703',
  title:  'face scrub, by Tezi',
},

{
  src: 'https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/318570728_101672056134809_605439092881602804_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHyvcsCMvJwz0P9DAXpCGSiOC1eLrDAzQM4LV4usMDNA0-CN7-eTJV_egWOqId07cb82gUlZxroYL8EWZ7hYIwf&_nc_ohc=PxrVNoBBkIcAX_A63VN&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfA4v-LXr1iK-F691uQtJgbgG8mNtCz-EJM7m-gSi0LSJA&oe=639AE40E',
  title:  'Manicure and pedicure by tezi',
},

{
  src: 'https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/318156478_101672082801473_882284769114992243_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFyUUoC_zTQdDec1MSeYCZYAGwra-mZz0YAbCtr6ZnPRqEp0ykyE8TLvwZEJYrvxWD2VBSsOMEbyjhT5abrGrtx&_nc_ohc=5wUnROrNxckAX9St9h-&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfDRbs_WJgAXupL5-5LFaWw2OO8u39ZBlf0z2PcnVUYdNA&oe=639BF073',
  title:  'Refit centre.',
},

{
  src: 'https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/318568368_101672076134807_8844188354132094297_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGgNtkNFpgIn634iIvCo6SbkcfXSw0RZX6Rx9dLDRFlfiMGg87j17LcAypgn6N3s6ynRzz-m5ql-T077p6tj-Oc&_nc_ohc=Ow159evtK-QAX8vWw_6&tn=9qEYC6OBv9TrTH3A&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfAPMVPOaEVaPVNP0-mZU2hduQS1v9P_s_jVCMaYJL7lQg&oe=639AAB82',
  title:  'Splash battle',
},

{
  src: 'https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/318796044_101671732801508_3394372009973222558_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFnFKompKMguu6NSpJW0QxAdm5jHcNRb_92bmMdw1Fv_85WH9woKPwi7xtKfNz228eYJZvUKRmruYPx6W5HDNG5&_nc_ohc=_TzX962uK_8AX94lKbq&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfAHzetHo1JyHkod2n3BnzfMeNZp9CsQlEcVcXdi_6GoKA&oe=639A4C77',
  title:  'Hairyt',
},

{
  src: 'https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/318654945_101671866134828_2602247396747950678_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGqNomLVo6b8zvqMpY1YVSW33ycfetdRI_ffJx9611Ejx83mqC8f1kPSw3YpjeCZ-5SAPELqEktX4CU8YjLHhgL&_nc_ohc=_UtL_BSYtFkAX8dooES&tn=9qEYC6OBv9TrTH3A&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfBV2lJxE3d3k5KU0SLT3uleEZsc5tfZqdKQuzf3m1o1ww&oe=639A9369',
  title:  'Kates Organic Honey',
},

{
  src: 'https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/318337122_101671922801489_2189070916317817492_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeETG-C_JcI2EudTciLAnfrEvf3VInqqWpC9_dUieqpakFdO5X_ZStMUD6yx-A0BhdTGFVdSinyx3sUua4LnAH54&_nc_ohc=Fx09w9X36LIAX_yfdTV&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfADXCrgnBunaTbGnABZwPBg7g7FxnOQNO9XQ72HR7MTnw&oe=639B58E1',
  title:  'Britney House of Glamour',
},

{
  src: 'https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/319546371_101671772801504_7134951330330380096_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeES5h6m6BEfgCl1veqQj4K2et2_cGizVn163b9waLNWfVPvw8Ud8C6JXI5QjUKlL7Fc3-oSNZk7E0ryKWlNLpqd&_nc_ohc=4rkWB9qZ8-QAX-GJ_1u&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfBUwYID--LBPUEpupdwnHCP9WDNswdX0uHpt-MvWYl9lw&oe=639AA511',
  title:  '237 echos',
},

{
  src: 'https://www.visa.gp/dam/VCOM/regional/lac/SPA/Default/affluent/VHLC/marquee-visa-luxury-hotel-collection-1600x900.jpg',
  title: 'Polymasters',
  description: 'Student union goverment of the ICT university',
},

];

export default function BottomBar() {
    const [flexBasis, setFlexBasis] = React.useState(300);
    const theme = createTheme({
      palette: {
        primary: {
          main: "#ffffff",
        },
        secondary: {
          main: '#292929',
        },
      },
    });
  return (
    <Box sx={{ flexGrow: 1 ,backgroundColor: '#292929',}}
    color="secondary">
    <h3 className='part1'>Nos partenaires: </h3>

      <Toolbar >
      <Box
      sx={{
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        width: 443,
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {data.map((item) => (
       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <Sheet
         variant="contained"
         sx={{
           display: 'flex',
           gap: 2,
           p: 2,
           minWidth: 300,
           borderRadius: 'sm',
         }}
       >
         <AspectRatio
           sx={{
             flexBasis: flexBasis ? `${flexBasis}px` : undefined,
             borderRadius: 'sm',
             overflow: 'auto',
           }}
         >
           <img
             src= {item.src}
             srcSet={item.src}
             alt=""
           />
         </AspectRatio>
         <Box>
           <h5 className='part'>{item.title}</h5>
         </Box>
       </Sheet>
       <br />
    
     </Box>
      ))}
    </Box>
      </Toolbar>
   
  </Box>


  );
}