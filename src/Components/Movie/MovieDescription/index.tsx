import React, { useState, useEffect } from "react";
import { Text, Card, Image, Container, Button, Flex, UnstyledButton } from '@mantine/core';
import { Movie } from '../MovieInterface';
import { formatDate, minutesToHours } from "../../../utils/Date";
import { IconShare }  from '@tabler/icons-react';


const MovieDescription: React.FC<Movie> = ({ title, posterUrl, description, _id, runTime, genres, releaseDate }) => {

    const handleShareClick = () => {
        const input = document.createElement("input");
        input.value = window.location.href;
        document.body.appendChild(input);
        input.select();
        input.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.body.removeChild(input);
        alert("URL copied to clipboard: " + input.value);
    };


    return (
        <Container px={0}>
            <Flex direction={"row"} justify={"center"} gap="xl">
                <div>
                    <Image src={posterUrl} style={{ height: 320, width: 223 }} alt={title} />
                </div>
                <div>
                    <Flex direction={"row"} justify={"space-between"}>
                        <Text size="36px" mt="5px" fw={700}>{title}</Text>
                        <Flex direction={"column"}>
                            <UnstyledButton mt="7px" onClick={handleShareClick}><IconShare/></UnstyledButton>
                            <Text size="xs">Share</Text>
                        </Flex>
                    </Flex>
                    <div style={{marginTop:"20px"}}>
                        <Text size="lg">{minutesToHours(runTime)}</Text>
                        <Text size="lg">{genres.join(", ")}</Text>
                        <Text size="lg">{formatDate(releaseDate)}</Text>
                    </div>
                    <div>

                    </div>
                </div>
            </Flex>
        </Container>
    );
}

export default MovieDescription;