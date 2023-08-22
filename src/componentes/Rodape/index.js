import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/img/facebook.png" alt="logo do facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="../img/tw.png" alt="logo do twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="../img/ig.png" alt="logo do instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/img/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Eduardo no curso Reactjs no alura .
            </p>
        </section>
    </footer>)
}

export default Rodape