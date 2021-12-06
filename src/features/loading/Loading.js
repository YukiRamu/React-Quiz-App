import { Container, Spinner } from "react-bootstrap";
import "./Loading.scss";

const Loading = () => {
    return (
        <Container fluid className="spinner d-flex h-100 align-items-center justify-content-center">
            <Spinner
                animation="border"
                variant="light" />
        </Container>
    );
};

export default Loading;