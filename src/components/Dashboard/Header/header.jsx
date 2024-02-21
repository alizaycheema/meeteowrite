import SiteLogo from '../../../assets/site-logo.png'

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="site-logo">
                    <a href="/">
                        <img width="248" src={SiteLogo} alt="site logo" />
                    </a>
                </div>
            </div>
        </header>
    )
}