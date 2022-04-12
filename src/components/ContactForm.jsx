import React, { useState } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import ConfirmationModal from "./ConfirmationModal";
import { Loader, Button, Icon } from "semantic-ui-react";

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const schema = Yup.object().shape({
    Namn: Yup.string().max(15).required("Obligatoriskt"),
    Epost: Yup.string().email("Ogiltig mejladress").required("Obligatoriskt"),
    TelefonNummer: Yup.number()
      .typeError("Ange bara siffror")
      .required("Obligatoriskt"),
    RegistreringNummer: Yup.string().required("Obligatoriskt"),
    OnskatPris: Yup.number().typeError("Ange bara siffror"),
    EventuellaDefekter: Yup.string(),
  });

  function sendEmail(values) {
    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_serviceId,
        process.env.REACT_APP_templateId,
        values,
        process.env.REACT_APP_userId
      )
      .then(
        () => {
          setLoading(false);
          setOpen(true);
          console.log(open);
        },
        (error) => {
          prompt("Ooopppsss!");
        }
      );
  }

  return (
    <Formik
      initialValues={{
        Namn: "",
        Epost: "",
        TelefonNummer: "",
        RegistreringNummer: "",
        OnskatPris: "",
      }}
      isSubmitting={() => {
        <Loader />;
      }}
      validationSchema={schema}
      onSubmit={(values, { isSubmitting, setSubmitting, resetForm }) => {
        sendEmail(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {(formik) => (
        <div className="l-form">
          <Form className="form" onSubmit={formik.handleSubmit}>
            <TextField label="Namn" name="Namn" type="text" />
            <TextField label="E-post" name="Epost" type="text" />
            <TextField label="Telefonnummer" name="TelefonNummer" type="text" />
            <div className="regnummer">
              <TextField
                label="Registreringsnummer"
                name="RegistreringNummer"
                type="text"
              />
              <div className="license-plate-search-plate">S</div>
            </div>

            <TextField label="Önskat Pris" name="OnskatPris" type="text" />
            {/* <button type="submit" className="formButton">Skicka</button> */}
            <Button
              size={"large"}
              style={{
                align: "center",
                backgroundColor: "rgb(232, 69, 69)",
                borderRadius: "60px",
                fontSize: "16px",
                width:"100px",
                height:"45px"
              }}
              loading={loading}
              primary
              type="submit"
              animated
            >
              <Button.Content visible>Skicka</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
            <ConfirmationModal setOpen={setOpen} open={open} />
          </Form>
        </div>
      )}
    </Formik>
  );
}
