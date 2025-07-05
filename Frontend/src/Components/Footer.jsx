function Footer() {
    const footerStyle = {
        backgroundColor: '#2C3E50',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        color: '#ffffff',
        padding: '1rem',
        bottom: '0',
        left: '0',
        width: '100%',
        zIndex: '1000'
    };
    return(
        <footer style={footerStyle}>
            <p style={{margin: '0'}}>SocialSyncConsole Version 0.1</p>
            </footer>
    );
}

export default Footer;