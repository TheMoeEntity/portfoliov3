import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-dark"
      style={{ backgroundColor: "#f8f8f8" }}
    >
      <section className="d-flex justify-content-between p-4 text-white"></section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">MOE</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: " 60px",
                  backgroundColor: "black",
                  height: "2px",
                }}
              />
              <p>
                Welcome to my realm of pixels and code! {`I'm `}Moe, a frontend
                web developer with a fiery passion for iOS and Swift.
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "black",
                  height: "2px",
                }}
              />
              <p>
                <a href="/#about" className="text-dark">
                  About
                </a>
              </p>
              <p>
                <a href="/#services" className="text-dark">
                  Services
                </a>
              </p>
              <p>
                <a href="/#projects" className="text-dark">
                  Projects
                </a>
              </p>
              <p>
                <Link href="/contact" className="text-dark">
                  Get in touch
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "black",
                  height: "2px",
                }}
              />
              <p>
                <i className="fas fa-home mr-3"></i>&nbsp;Co-op villas, Badore,
                Lagos.
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i>&nbsp;
                mosesnwigberi@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> +234 807 548 9362
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> +234 907 253 4875
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.01)" }}
      >
        © 2024 Copyright: &nbsp;
        <a className="text-dark" href="https://github.com/TheMoeEntity/">
          Moses Chukwudi Nwigberi
        </a>
      </div>
    </footer>
  );
};

export default Footer;
