import React from 'react';
import {WebView} from 'react-native-webview';
import * as ScreenOrientation from 'expo-screen-orientation';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #333333;
`;

async function changeScreenOrientation(){
    await ScreenOrientation.OrientationLock.LANDSCAPE;
}

export default function Player({ route }) {
    changeScreenOrientation();
    const videoId = routes.params.videoId;
    const VideoUrl = 'https://www.youtube.com/embed/${videoId}';
    return (
        <Container>
            <WebView
            source={{uri:VideoUrl}}
            allowsFullscreenVideo={true}
            style={{ height: "35%"}}
            />
        </Container>
    )
}