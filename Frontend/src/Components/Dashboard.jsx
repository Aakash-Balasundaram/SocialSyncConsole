import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Dashboard() {
    const iconSizeRem = '1.5rem';

    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#E67E22',
    };

    const iconStyle = {
        fontSize: iconSizeRem,
    };

    return (
        <div>
            <div
                className="platform-cards"
                style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '25rem',
                }}
            >
                <div className="card" style={cardStyle}>
                    <FaFacebook className="border border-white border-opacity-50 p-1 rounded" style={{ ...iconStyle, color: '#3498db' }} />
                    Facebook
                </div>
                <div className="card" style={cardStyle}>
                    <FaInstagram className="border border-white border-opacity-50 p-1 rounded" style={{ ...iconStyle, color: '#e1306c' }} />
                    Instagram
                </div>
                <div className="card" style={cardStyle}>
                    <FaXTwitter className="border border-white border-opacity-50 p-1 rounded" style={{ ...iconStyle, color: '#ECF0F1' }} />
                    Twitter (X)
                </div>
                <div className="card" style={cardStyle}>
                    <FaWhatsapp className="border border-white border-opacity-50 p-1 rounded" style={{ ...iconStyle, color: '#075e54' }} />
                    WhatsApp
                </div>
                <div className="card" style={cardStyle}>
                    <FaLinkedin className="border border-white border-opacity-50 p-1 rounded" style={{ ...iconStyle, color: '#0077B5' }} />
                    LinkedIn
                </div>
                <div className="card" style={cardStyle}>
                    <FaYoutube className="border border-white border-opacity-50 p-1 rounded" style={{ ...iconStyle, color: '#CD201F' }} />
                    YouTube
                </div>
            </div>
        </div>
    );
}

export default Dashboard;