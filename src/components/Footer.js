// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Footer() {
//   let date = new Date();
//   let year = date.getFullYear();
//   return (
//     <Container fluid className="footer">
//       <Row>
//         <Col md="4" className="footer-copywright">
//           <h3>Designed and Developed by Harsh Kumar</h3>
//         </Col>
//         {/* <Col md="4" className="footer-copywright">
//           <h3>Copyright © {year} SB</h3>
//         </Col> */}
//         <Col md="4" className="footer-body">
//           <ul className="footer-icons">
//             <li className="social-icons">
//               <a
//                 href="https://github.com/haxzh"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiFillGithub />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://twitter.com/harsh_shakya_84"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiOutlineTwitter />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.linkedin.com/in/haxzh"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.instagram.com/am.haxzh"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiFillInstagram />
//               </a>
//             </li>
//           </ul>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Footer;








import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Harsh Kumar</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Harsh Kumar</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/haxzh"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/harsh_shakya_84"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/haxzh"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/am.haxzh"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

