import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import classes from './Formulario.module.css'

function Formulario() {

 
  return (
    <div className={classes.formulario}>
        <div className={classes.form_container} >
            <h2>If you want to contact me please fill this form</h2>
            <Form className={classes.form}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className={` ${classes.text_muted}`}>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="First name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        <div className={classes.iframe_container}>
            <h2>This is a tutorial showing how to use the API thas is being used in this website </h2>
            <iframe src="https://www.youtube.com/embed/bpHtxx_wmqw"></iframe>
        </div>
    </div>
  )
}

export default Formulario

