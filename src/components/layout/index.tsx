import React from "react";
import { Header, Footer, Container } from "@components";

export const Layout: React.FC = ({ children }) => {
    return (
        <Container>
            <Header />
            {children}
            <Footer />
        </Container>
    );
};
