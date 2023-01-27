import logo from './logo.svg'

const Footer = () => {
    return <footer
        style={{
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: 'red'
        }}
    >
        <img
            style={{
                width: 100,
                height: 100,
            }}
            src={logo} alt="logo mern02 react" />
        <h3>mern02</h3>
    </footer>
}
export default Footer;
