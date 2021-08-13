import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

export default function TrackForm() {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  console.log(locations.length);

  return (
    <>
      <Spacer>
        <Input
          value={name}
          placeholder="Enter Name"
          onChangeText={changeName}
        />

        <Button
          title={recording ? "Stop" : "Start Tracking"}
          onPress={recording ? stopRecording : startRecording}
        ></Button>

        <Spacer />
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
}
