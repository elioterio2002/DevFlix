import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import * as ScreenOrientation from 'expo-screen-orientation';

import VideosList from '../../Database/videos.json';
import VideosList2 from '../../Database/videos2.json';
import VideosList3 from '../../Database/videos3.json';
import Header from "../../components/Header";
import Videos from "../../components/Videos";
import Poster from "../../components/Poster";

const Container = styled.ScrollView`
    flex: 1;
    background-color: #333333;
`;

async function changeScreenOrientation(){
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}

export default function Home(){
    changeScreenOrientation();
    return(
        <>
            <StatusBar 
                translucent 
                backgroundColor="transparent" 
                barStyle="light-content"
            />
            <Container>
                <Poster
                    url={"http://i3.ytimg.com/vi/VsU6p7DHVtA/maxresdefault.jpg"}
                    title={
                        "Cursos de Tecnologia do SENAI"
                    }
                    tags={["React Native", "Expo"]}
                    content={<Header />}
                ></Poster>
                <Videos label="Banco de Dados" videos={VideosList}> </Videos>
                <Videos label="PHP" videos={VideosList2}> </Videos>
                <Videos label="JavaScript" videos={VideosList3}> </Videos>
            </Container>
        </>
    );
}

