
import style from '@/styles/footer.module.scss';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className="row footer-text">
                    <div className="col-lg-4">Copyright © Eye The Talent 2021</div>
                    <div className="col-lg-4 my-3 my-lg-0 text-center">
                        <div className='social-handle'>
                            <a href=""><img src="../images/icons/facebook.png" /></a>
                            <a href='#'><img src="../images/icons/instagram.png" /></a>
                            <a href='#'><img src="../images/icons/youtube.png" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
