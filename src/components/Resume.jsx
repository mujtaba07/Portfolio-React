import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { Page, Document, pdfjs } from "react-pdf";
import MSResume from "../assets/Mujtaba-Sayyed.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  return (
    <Container fluid>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={8}>
    
            <Document 
              file={MSResume}
              onLoadError={console.error}
              style={{ width: "100vh", height: "100vh" }}
            >
              <Page pageIndex={0} />
            </Document>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
export default Resume;
