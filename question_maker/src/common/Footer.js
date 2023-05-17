import Container from '@mui/material/Container';

import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="md">
        <div className='bold'>Contact Us</div>
        <div className='thin'>이현진 hjnee1102@gmail.com</div>
        <div className='thin'>김상원 kswdev997@gmail.com</div>
      </Container>
    </div>
  )
}

export default Footer;