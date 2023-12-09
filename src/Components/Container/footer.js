import React from "react";
import Footer from '../Footer';
import Icon from '../Icons';


export function FooterContainer() {
    return(
    <Footer>
        <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Title>My Account</Footer.Title>
                    <Footer.Link href="/signIn">Login</Footer.Link>
                    <Footer.Link href="/signUp">Creat Account</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Shop</Footer.Title>
                    <Footer.Link href="/women">Women</Footer.Link>
                    <Footer.Link href="/men">Men</Footer.Link>
                    <Footer.Link href="/kids">Kids</Footer.Link>
                    <Footer.Link href="/accessories">Accessories</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#" target='blank'><Icon className="fa-brands fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#" target='blank'><Icon className="fa-brands fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#" target='blank'><Icon className="fa-brands fa-twitter" />Twitter</Footer.Link>
                    <Footer.Link href="#" target='blank'><Icon className="fa-brands fa-youtube" />Youtube</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Contactus><Icon className="fas fa-home" />Address</Footer.Contactus>
                    <Footer.Discribtion>Egypt , Cairo </Footer.Discribtion>
                    <Footer.Contactus><Icon className="fa fa-envelope" />Email</Footer.Contactus>
                    <Footer.Discribtion>Test@gmail.com</Footer.Discribtion>
                    <Footer.Contactus><Icon className="fa fa-phone" />Phone</Footer.Contactus>
                    <Footer.Discribtion>01234567890</Footer.Discribtion>
                </Footer.Column>
            </Footer.Row>
        </Footer.Wrapper>
    </Footer>
    )
}