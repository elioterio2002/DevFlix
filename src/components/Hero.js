import React from "react";
import styled from "styled-components/native";
import {Feather, Ionicons} from "@expo/vector-icons";

const ActionMenu = styled.View`
    width: 95%;
    margin-left: 10px;
    margin-top: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.TouchableOpacity`
    align-items: center;
`;

const TextButton = styled.Text`
    color: #e9ecef;
    font-size: 13px;
    margin-top: 3px;
`;

const Play = styled.TouchableOpacity`
    flex-direction: row;
    background-color: #e9ecef;
    width: 142px;
    height: 32px;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
`;

const TextPlayBtn = styled.Text`
    font-size: 15px;
    font-weight: 700;
    padding-left: 5px;
`;

export default function Hero(){
    return(
        <ActionMenu>
            <Button>
                <Feather name="plus" size={26} color="#e9ecef"></Feather>
                <TextButton>Você é criador de conteudo ? Se sim, adicione seus videos!</TextButton>
            </Button>
            <Play>
                <Ionicons name="ios-play" size={22}></Ionicons>
                <TextPlayBtn>Assistir</TextPlayBtn>
            </Play>
            <Button>
                <Feather name="info" size={22} color="#e9ecef"></Feather>
                <TextButton>Saiba Mais</TextButton>
            </Button>
        </ActionMenu>
    );
}