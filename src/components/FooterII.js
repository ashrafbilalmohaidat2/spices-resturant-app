import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
const FooterII = () => {
    const [showTopBtn, setshowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 200){
                setshowTopBtn(true);
            } else{
                setshowTopBtn(false);
            }
        })
    }, [])

    function goTop(){
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
    return(
        <footer id="footer" className="bg-dark text-center text-lg-start">
            <Container className="p-4">
                <Row>
                <Col lg={6} md={12} className="mb-4 mb-md-0">
                <ul className="example-2">
                    <li className="icon-content">
                        <a
                        href="https://facebook.com/"
                        aria-label="facebook"
                        data-social="facebook"
                        >
                        <div className="filled"></div>
                        <i className="bi bi-facebook"></i>
                        </a>
                    </li>
                    <li className="icon-content">
                        <a href="https://www.whatsapp.com/" aria-label="whatsapp" data-social="whatsapp">
                        <div className="filled"></div>
                        <i className="bi bi-whatsapp"></i>
                        </a>
                    </li>
                    <li className="icon-content">
                        <a
                        href="https://www.instagram.com/"
                        aria-label="Instagram"
                        data-social="instagram"
                        >
                        <div className="filled"></div>
                        <i className="bi bi-instagram"></i>
                        </a>
                    </li>
                    <li className="icon-content">
                        <a href="tel:+123456789" aria-label="Phone" data-social="Phone">
                        <div className="filled"></div>
                        <i className="bi bi-telephone-fill"></i>
                        </a>
                    </li>
                    </ul>      
                </Col>
                <Col lg={6} md={12} className="mb-4 mb-md-0">
                    <h5 className="text-uppercase">Spices Family</h5>
                    <p>
                    We invite you to indulge in the flavors of Spices!
                     Our menu is crafted with love, using only the freshest
                      ingredients to create dishes that are sure to satisfy your cravings.
                       Whether you're a first-time guest or a loyal customer,
                        we promise a memorable dining experience with every visit.
                         Come taste the difference and see why Spices is the perfect place for great food and good times!
                    </p>
                </Col>
                </Row>
            </Container>

            <div className="copyright text-center p-3">
            &copy; 2024 Spices
            </div>
            {
                showTopBtn && (<div className='go-top' onClick={goTop}></div>)
            }
    </footer>
    )
}
export default FooterII