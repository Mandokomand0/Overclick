import React from "react";

const Footer = () =>

	<footer id="footer-holder">
		<div id="footer-inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						<div className="footer-block">
							<div id="footer-logo">
								<div className="img-holder">
									<img className="img-item" src="../../assets/images/innovate-logo-reverse.png"/>
								</div>
							</div>
						</div>
						<div className="div-spacer m-y-1 p-y-1 hidden-lg-up"></div>
					</div>
					<div className="col-lg-9">
						<div className="row">
							<div className="col-sm-6 col-md-3">
								<div className="footer-block text-xs-center text-md-left">
									<div className="div-spacer p-t-1 hidden-md-down"></div>
									<div className="headline text-uppercase">
										<h5>Key Areas</h5>
									</div>
									<ul className="m-b-0 p-l-0 list-unstyled">
										<li><a href="">Personal</a></li>
										<li><a href="">Small Business</a></li>
										<li><a href="">Wealth Management</a></li>
										<li><a href="">Business & Institutions</a></li>
									</ul>
								</div>
								<div className="div-spacer m-y-1 p-y-1 hidden-lg-up"></div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="footer-block text-xs-center text-md-left">
									<div className="div-spacer p-t-1 hidden-md-down"></div>
									<div className="headline text-uppercase">
										<h5>Banking With Us</h5>
									</div>
									<ul className="m-b-0 p-l-0 list-unstyled">
										<li><a href="">Internet Banking</a></li>
										<li><a href="">Mobile Banking</a></li>
										<li><a href="">Security</a></li>
										<li><a href="">Rates &amp; charges</a></li>
										<li><a href="">Glossary</a></li>
										<li><a href="">Service availability</a></li>
									</ul>
								</div>
								<div className="div-spacer m-y-1 p-y-1 hidden-lg-up"></div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="footer-block text-xs-center text-md-left">
									<div className="div-spacer p-t-1 hidden-md-down"></div>
									<div className="headline text-uppercase">
										<h5>Products &amp; Services</h5>
									</div>
									<ul className="m-b-0 p-l-0 list-unstyled">
										<li><a href="">Checking accounts</a></li>
										<li><a href="">Credit cards</a></li>
										<li><a href="">Savings</a></li>
										<li><a href="">Investments</a></li>
										<li><a href="">Mortgages</a></li>
										<li><a href="">Loans</a></li>
										<li><a href="">Car finance</a></li>
										<li><a href="">Insurance</a></li>
										<li><a href="">Travel services</a></li>
										<li><a href="">Private Banking</a></li>
									</ul>
								</div>
								<div className="div-spacer m-y-1 p-y-1 hidden-sm-up"></div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="footer-block text-xs-center text-md-left">
									<div className="div-spacer p-t-1 hidden-md-down"></div>
									<div className="headline text-uppercase">
										<h5>About Us</h5>
									</div>
									<ul className="m-b-0 p-l-0 list-unstyled">
										<li><a href="">About Innovate</a></li>
										<li><a href="">Find a branch</a></li>
										<li><a href="">Careers</a></li>
									</ul>
									<div className="div-spacer m-b-1"></div>
									<div className="social-icons social-sharer social-icons-styleless text-xs-center text-md-left">
										<a className="social-icon social-media-twitter" data-original-title="Twitter" href="#">
											<i className="fa fa-twitter" aria-hidden="true"></i>
										</a>
										<a className="social-icon social-media-facebook" data-original-title="Facebook" href="#">
											<i className="fa fa-facebook" aria-hidden="true"></i>
										</a>
										<a className="social-icon social-media-linkedin" data-original-title="LinkedIn" href="#">
											<i className="fa fa-linkedin" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="copyright-holder">
			<div className="container">
				<p className="m-y-0 text-xs-center">
					&#169; 2017 Innovate Financial Services
					<br className="hidden-lg-up"></br>
					<span className="hidden-md-down">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<a href="#">Privacy</a>
					<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<a href="#">Security</a>
					<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<a href="#">Terms of use</a>
				</p>
			</div>
		</div>
	</footer>

export default Footer;