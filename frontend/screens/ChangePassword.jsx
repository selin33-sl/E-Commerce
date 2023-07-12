import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { useDispatch } from "react-redux";
import { updatePassword } from "../redux/actions/otherAction";
import { useMessageAndErrorOther } from "../utils/hooks";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const dispatch = useDispatch();

  const loading = useMessageAndErrorOther(dispatch);

  const submitHandler = () => {
    dispatch(updatePassword(oldPassword, newPassword));
    setOldPassword("");
    setNewPassword("");
  };
  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
      <Header back={true} />

      {/*Heading*/}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Change Password</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          placeholder="Old Password "
          value={oldPassword}
          onChangeText={setOldPassword}
          secureTextEntry={true}
        />
        <TextInput
          {...inputOptions}
          placeholder="New Password "
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={true}
        />

        <Button
          loading={loading}
          textColor={colors.color2}
          disabled={oldPassword === "" || newPassword === ""}
          onPress={submitHandler}
          style={styles.btn}
        >
          Change
        </Button>
      </View>
    </View>
  );
};

export default ChangePassword;
