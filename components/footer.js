
import style from '@/styles/footer.module.scss';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className="row footer-text">
                    <div className="col-lg-4">Copyright © Eye The Talent 2021</div>
                    <div className="col-lg-4 my-3 my-lg-0 text-center">
                        <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/dronefreakindia" target="_blank" rel="noreferrer"><svg className="svg-inline--fa fa-facebook-f fa-w-10" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/eyethetalentproduction/?hl=en" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
