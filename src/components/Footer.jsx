import React from "react";
import { Segment, Container } from "semantic-ui-react";
function Footer() {
  return (
    <div className="footer">
      <Segment className="segment"  style={{ padding: "2em 0em", backgroundColor:"rgb(233, 227, 227)" }}>
        <Container textAlign={"center"} text>
          <p>
            # bilfirma # bilpriser # blocket sälja bilar # byter bilar #
            bilverkstad # Defekta bilar köpes # defektabilarköpes.se # Trasiga
            bilar köpes # Köper trasiga bilar # Köper bilar over hela Sverige #
            Vi köper din bil # Viköperdinbil # Krockade bilar köpes # Trasiga
            bilar köpes # Sälja min bil # Köper alla bilar # Köper din defekt
            bil # Köper din krockade bil # Sälja din bil # Vi köper bilar # Alla
            bilar köpes
          </p>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
