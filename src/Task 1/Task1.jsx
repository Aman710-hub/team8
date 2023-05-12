import React, { useState } from "react";
import { Pagination } from "@mui/material";
import { useQuery } from "react-query";
import { Autocomplete, TextField } from "@mui/material";
import {
  Wrapper,
  List,
  Title,
  Image,
  Details,
  Name,
  Status,
  Gender,
  Episodes,
  ListItem,
  PaginationContainer,
  Loading,
} from "./Task1.styles";
const Task1 = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery(["characters", page], () =>
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then(
      (res) => res.json()
    )
  );
  const names = data?.results.map((item) => item.name);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (isLoading) {
    return <Loading>Loading...😶‍🌫️</Loading>;
  }

  if (isError) {
    return <Error>Something went wrong 😗</Error>;
  }

  return (
    <Wrapper>
      <Title>Characters 🫠</Title>
      <List>
        {data?.results.map((character) => (
          <ListItem key={character.id}>
            <Image src={character.image} alt={character.name} />
            <Details>
              <Name>{character.name}</Name>
              <Status>Status: {character.status}</Status>
              <Gender>Gender: {character.gender}</Gender>
              <Episodes>Total Episodes: {character.episode.length}</Episodes>
            </Details>
          </ListItem>
        ))}
      </List>
      <PaginationContainer>
        <Pagination
          count={data?.info.pages}
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
          size="large"
        />
        <Autocomplete
          clearOnEscape
          disablePortal
          id="combo-box-demo"
          options={names || []}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Characters" />}
        />
      </PaginationContainer>
    </Wrapper>
  );
};

export default Task1;
