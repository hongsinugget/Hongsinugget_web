export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <img src="/images/logo.svg" alt="logo" className="footer-logo" />
                    <p>
                        <span className="footer-highlight">작은 손길로 시작된 무언가가 세상에 울림을 만들 수 있기를.</span><br />
                        E-mail hongsinugget@gmail.com
                    </p>
                </div>
                <div className="footer-right">
                    <div className="footer-social">
                        <a href="https://hongsinugget.tistory.com/"><img src="/images/tistory.svg" alt="tistory" /></a>
                        <a href="https://github.com/hongsinugget"><img src="/images/github.svg" alt="github" /></a>
                        <a href="https://www.linkedin.com/in/yangsubindev/"><img src="/images/LinkedIn.svg" alt="linkedin" /></a>
                    </div>
                    <div className="footer-copyright">© 2025 Hongsinugget. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
}
