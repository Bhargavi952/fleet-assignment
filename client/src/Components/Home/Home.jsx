import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import styles from "./styles.module.css";
import Navbar from "../NavBar/NavBar";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const Home = () => {
  const [text, setText] = useState();
  const [data, setData] = useState([]);
  const getcommitsAuthor = async () => {
    try {
      await axios
        .get("http://localhost:8000/commits")
        .then((res) => setData(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(text);

  useEffect(() => {
    getcommitsAuthor();
  }, []);
  return (
    <div>
      <Navbar />
      <form>
        <div
          style={{
            display: "flex",
            margin: "50px 20px",
            alignItems: "flex-start",
            height: "400px",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <TextField
            id="standard-basic"
            label="Enter Name"
            variant="standard"
            onChange={(e) => setText(e.target.value)}
          />

          <Button onClick={getcommitsAuthor} variant="outlined">
            Check Commits
          </Button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Home;
