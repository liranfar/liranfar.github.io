import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="form-group">
                    <h3>l.farage@gmail.com</h3>
                </div>
                <div className="form-group">
                    <ul className="social-ul">
                        <li><a href="https://www.facebook.com/liran.farage"><span className="fa fa-facebook-official"></span></a></li>
                        {/*<li><a href=""><span className="fa fa-twitter-square"></span></a></li>
                        <li><a href=""><span className="fa fa-google-plus-square"></span></a></li>
                        <li><a href=""><span className="fa fa-tumblr-square"></span></a></li>*/}
                        <li><a href="https://www.linkedin.com/in/liran-farage-b60464101"><span className="fa fa-linkedin-square"></span></a></li>
                    </ul>
                </div>
                <p>Liran Farage - full-stack developer. Copyright &copy; 2018</p>

            </footer>
        );
    }
}

Footer.propTypes = {
    /*    companyName: PropTypes.string.isRequired,
        lineOfBusiness: PropTypes.string.isRequired*/
};
Footer.defaultProps = {};

export default Footer;