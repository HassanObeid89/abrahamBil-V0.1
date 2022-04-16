import React from "react";
import { Segment, Container } from "semantic-ui-react";
function Footer() {
  return (
    <div className="footer">
      <Segment className="segment"  style={{ padding: "2em 0em", backgroundColor:"rgb(233, 227, 227)" }}>
        <Container textAlign={"center"} text>
          <p>
          © bilarköpes.se
          </p>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
