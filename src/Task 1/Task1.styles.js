import styled from "styled-components";



export const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const Loading = styled.h1`
  text-align: center;
  margin-top: 25rem;
  color: #2121b2;
`;

export const Error = styled.h1`
  text-align: center;
  margin-top: 8rem;
  color: red;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 2rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Status = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const Gender = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const Episodes = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-direction: column;
  margin-bottom: 5rem;
`;
