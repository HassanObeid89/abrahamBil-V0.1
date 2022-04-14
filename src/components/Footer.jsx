import React from "react";
import { Segment, Container } from "semantic-ui-react";
function Footer() {
  return (
    <div className="footer">
      <Segment className="segment"  style={{ padding: "2em 0em", backgroundColor:"rgb(233, 227, 227)" }}>
        <Container textAlign={"center"} text>
          <p>
            # Defekta bilar köpes 
            # bilar köpes # Köper bilar over hela Sverige 
            # Vi köper din bil # Krockade bilar köpes # Sälja min bil 
            # Köper alla bilar # Sälja din bil # Vi köper bilar # Alla
            bilar köpes
          </p>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
