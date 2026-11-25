// Shared footer used on every page: <site-footer></site-footer>
class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <div class="footer-brand">
                <a class="footer-logo" href="./index.html" aria-label="myteam home">
                    <img src="./assets/icons/logo.svg" alt="myteam" width="160" height="40">
                </a>
                <nav class="footer-navigation" aria-label="Footer">
                    <ul class="footer-nav-list">
                        <li><a class="footer-nav-link" href="./index.html">home</a></li>
                        <li><a class="footer-nav-link" href="./about.html">about</a></li>
                    </ul>
                </nav>
            </div>

            <address class="footer-address">
                <p>Gedimino pr. 9</p>
                <p>LT-01103 Vilnius, Lithuania</p>
                <p>Call Us : <a class="footer-phone" href="tel:+37052123456">+370 5 212 3456</a></p>
            </address>

            <div class="footer-meta">
                <ul class="footer-social">
                    <li>
                        <a class="footer-social-link footer-social-facebook" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="myteam on Facebook"></a>
                    </li>
                    <li>
                        <a class="footer-social-link footer-social-pinterest" href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="myteam on Pinterest"></a>
                    </li>
                    <li>
                        <a class="footer-social-link footer-social-twitter" href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="myteam on Twitter"></a>
                    </li>
                </ul>
                <p class="footer-copyright">Copyright 2026. All Rights Reserved</p>
            </div>
        </footer>
        `;
    }
}

customElements.define("site-footer", SiteFooter);
