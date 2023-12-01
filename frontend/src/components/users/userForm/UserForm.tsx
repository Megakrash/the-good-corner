import React, { FormEvent, useState } from "react";
import axios from "axios";
import UserName from "./UserName";
import UserPassword from "./UserPassword";
import UserZipCity from "./UserZipCity";
import toast, { Toaster } from "react-hot-toast";
import {
  Box,
  Button,
  Card,
  FormControl,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { mutationCreateUser } from "@/components/graphql/Users";
import { UserFormData } from "@/types";
import { API_URL } from "@/configApi";
import { useMutation } from "@apollo/client";
import router from "next/router";
import { DownloadInput } from "@/styles/MuiStyled";

const UserForm = (): React.ReactNode => {
  // Form
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handlePasswordChange = (newPassword: React.SetStateAction<string>) => {
    setPassword(newPassword);
  };
  const [zipCode, setZipCode] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [picture, setPicture] = useState<File | null>(null);
  function handleFileSelection(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      setPicture(event.target.files[0]);
    }
  }
  // SUBMIT
  const [doCreate] = useMutation(mutationCreateUser);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const dataFile = new FormData();
    dataFile.append("title", nickName);
    dataFile.append("file", picture);

    try {
      let filename: string;
      if (picture) {
        const uploadResponse = await axios.post(`${API_URL}avatar`, dataFile, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        filename = uploadResponse.data.filename;
      }

      const data: UserFormData = {
        firstName,
        lastName,
        nickName,
        email,
        password,
        picture: filename ? filename : "",
        zipCode,
        city,
        isAdmin: false,
        ...(phoneNumber !== "" && { phoneNumber }),
      };

      const result = await doCreate({
        variables: {
          data: data,
        },
      });
      if ("id" in result.data?.item) {
        router.replace(`/compte/${result.data.item.id}`);
      } else {
        toast("Erreur pendant la création de votre compte");
      }
    } catch (error) {
      toast("Erreur pendant la création de votre compte");
      console.error("error", error);
    }
  }
  return (
    <Card className="userForm">
      <Toaster
        toastOptions={{
          style: {
            background: "#ff8a00",
            color: "#fff",
          },
        }}
      />
      <Typography variant="h4" gutterBottom>
        Création de votre compte
      </Typography>
      <FormControl
        className="userForm_control"
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <UserName
          lastName={lastName}
          firstName={firstName}
          setFirstName={setFirstName}
          setLastName={setLastName}
        />
        <Box className="userForm_control_box">
          <TextField
            fullWidth
            id="pseudo"
            size="small"
            label="Pseudo"
            variant="outlined"
            value={nickName || ""}
            onChange={(e) => setNickName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            id="email"
            type="email"
            size="small"
            label="Email"
            variant="outlined"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Box>
        <UserPassword
          password={password}
          onPasswordChange={handlePasswordChange}
        />
        <Box className="userForm_control_box">
          <UserZipCity setCity={setCity} setZipCode={setZipCode} />
          <TextField
            fullWidth
            id="phoneNumber"
            type="tel"
            size="small"
            label="Téléphone"
            variant="outlined"
            value={phoneNumber || ""}
            onChange={(e) => {
              const inputNumber = e.target.value;
              const regex = /^[0-9]*$/;
              if (regex.test(inputNumber)) {
                setPhoneNumber(inputNumber);
              }
            }}
            inputProps={{
              maxLength: 10,
            }}
          />
        </Box>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          {`Télécharger une image de profil`}
          <DownloadInput
            type="file"
            accept=".jpg, .png, .webp"
            onChange={handleFileSelection}
          />
        </Button>
        <Button variant="contained" size="large" type="submit">
          Créer mon compte
        </Button>
        <Box className="userForm_control_boxConnect">
          <Typography variant="subtitle2" gutterBottom>
            Déjà inscrit ?
          </Typography>
          <Link variant="body2" href="/inscription/connexion">
            {"Connectez-vous"}
          </Link>
        </Box>
      </FormControl>
    </Card>
  );
};

export default UserForm;