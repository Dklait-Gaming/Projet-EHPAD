import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AuthentificationForm from "../components/authentification";
import { Button, Box } from "@mui/material";

export default function AuthentificationAdmin() {
  return (
    <>
      <Navbar />
      <AuthentificationForm />
      <Box textAlign="center" mt={-32} sx={{ overflowY: "auto", height: "100vh"}}>
        <Link to={"/dashboard-admin"} style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Aller au dashboard vide
          </Button>
        </Link>
      </Box>
      <Footer />
    </>
  );
}