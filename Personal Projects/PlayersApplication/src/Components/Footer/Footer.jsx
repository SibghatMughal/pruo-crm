import { OpenInNew } from '@mui/icons-material';
import './footer.css';
import footer from '../../assets/images/footer.svg';

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-content">

      <div className="section">
        <div className="heading">Connect With Us</div>
        <ul>
          <li>Twitter <OpenInNew sx={{color:'rgb(177, 186, 210)',fontSize:'14px'}}/></li>
          <li>Discord <OpenInNew sx={{color:'rgb(177, 186, 210)',fontSize:'14px'}}/></li>
        </ul>
      </div>

      <div className="section">
        <div className="heading">Support</div>
        <ul>
          <li>Create a Ticket<OpenInNew sx={{color:'rgb(177, 186, 210)',fontSize:'14px'}}/></li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>FAQ</li>
          
        </ul>
      </div>


      <div className="section">
        <div className="heading">Features</div>
        <ul>
          <li>Shop</li>
          <li>Tokens</li>
          <li>Leaderboard</li>
          <li>Profile</li>
          <li>My Locker</li>
        </ul>
      </div>
       
       <div className="footerText">

      <div className="image">
        <img src={footer} alt="footer image" />
      </div>
      <div className="allright">© 2022 LookingForTokens LLC | All Rights Reserved.</div>
      <div className="mail">business@lookingfortokens.com</div>
       </div>
      </div>
    </div>
  )
}

export default Footer