import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardComponent({ title, children, footer }) {
    return (
        <Card style={{ width: "36rem" }}>
            <CardHeader className="text-content">{title}</CardHeader>
            <CardBody>{children}</CardBody>
            {footer && <CardFooter className="text-content">{footer}</CardFooter>}
        </Card>
    );
}
