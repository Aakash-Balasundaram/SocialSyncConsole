import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Dashboard() {
    const iconSizeRem = '1.75rem';

    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#E67E22',
    };

    const iconBaseStyle = {
        fontSize: iconSizeRem,
        padding: '0.25rem',
        borderRadius: '9999px',
        borderWidth: '2px',
        borderStyle: 'solid',
    };

    return (
        <div>
            <div
                className="platform-cards"
                style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                <div className="card" style={cardStyle}>
                    <FaFacebook
                        className="shadow-[0_0_8px_#3498db]"
                        style={{
                            ...iconBaseStyle,
                            color: '#3498db',
                            borderColor: '#3498db',
                            boxShadow: '0 0 0.5rem #3498db',
                        }}
                    />
                    Facebook
                </div>
                <div className="card" style={cardStyle}>
                    <FaInstagram
                        className="shadow-[0_0_8px_#e1306c]"
                        style={{
                            ...iconBaseStyle,
                            color: '#e1306c',
                            borderColor: '#e1306c',
                            boxShadow: '0 0 0.5rem #e1306c',
                        }}
                    />
                    Instagram
                </div>
                <div className="card" style={cardStyle}>
                    <FaXTwitter
                        className="shadow-[0_0_8px_#ECF0F1]"
                        style={{
                            ...iconBaseStyle,
                            color: '#ECF0F1',
                            borderColor: '#ECF0F1',
                            boxShadow: '0 0 0.5rem #ECF0F1',
                        }}
                    />
                    Twitter
                </div>
                <div className="card" style={cardStyle}>
                    <FaWhatsapp
                        className="shadow-[0_0_8px_#075e54]"
                        style={{
                            ...iconBaseStyle,
                            color: '#075e54',
                            borderColor: '#075e54',
                            boxShadow: '0 0 0.5rem #075e54',
                        }}
                    />
                    WhatsApp
                </div>
                <div className="card" style={cardStyle}>
                    <FaLinkedin
                        className="shadow-[0_0_8px_#0077B5]"
                        style={{
                            ...iconBaseStyle,
                            color: '#0077B5',
                            borderColor: '#0077B5',
                            boxShadow: '0 0 0.5rem #0077B5',
                        }}
                    />
                    LinkedIn
                </div>
                <div className="card" style={cardStyle}>
                    <FaYoutube
                        className="shadow-[0_0_8px_#CD201F]"
                        style={{
                            ...iconBaseStyle,
                            color: '#CD201F',
                            borderColor: '#CD201F',
                            boxShadow: '0 0 0.5rem #CD201F',
                        }}
                    />
                    YouTube
                </div>
            </div>
        </div>
    );
}

export default Dashboard;