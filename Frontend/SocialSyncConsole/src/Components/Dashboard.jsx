import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter} from 'react-icons/fa6';

function Dashboard(){
    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#E67E22',
    };
    return (
        <div>
            <div className="platform-cards" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div className="card" style={cardStyle}>
                    <FaFacebook size={30}  color='#3498db'/>Facebook</div>
                <div className = "card" style={cardStyle}>
                    <FaInstagram size={30} color='#e1306c'/>Instagram</div>
                <div className = "card" style={cardStyle}>
                    <FaXTwitter size={30} color='#ECF0F1' />Twitter(X)</div>
                <div className = "card" style={cardStyle}>
                    <FaWhatsapp size={30} color='#075e54' />WhatsApp</div>
                <div className = "card" style={cardStyle}>
                    <FaLinkedin size={30} color='#0077B5' />LinkedIn</div> 
                <div className = "card" style={cardStyle}>
                    <FaYoutube size={30} color='#CD201F'/>YouTube</div>
            </div>
        </div>
    );
}

export default Dashboard;