import React from "react";
import { Segment, Container } from "semantic-ui-react";
function Footer() {
  return (
    <div className="footer">
      <Segment className="segment"  style={{ padding: "2em 0em", backgroundColor:"rgb(233, 227, 227)" }}>
        <Container textAlign={"center"} text style={{ marginBottom: "1em" }}>
          <p>
          © viköperdefektbil.se
          </p>
        </Container>
        <Container textAlign={"center"} text>
          <p>
            #defekta bilar #trasiga bilar #skrotbilar #skrotbil #skrotbilar #skrotbil
            #vi köper defekta bilar #vi köper skrotbilar #vi köper trasiga bilar
            #vi köper bilar
          </p>
          <p>
            #defekta bilar köpes #skrotbilar köpes #trasiga bilar köpes
          </p>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
