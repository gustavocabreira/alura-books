import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { books } from './data';

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`

const Title = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`

const BooksList = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-gap: 4;
`

function Search() {
  const [booksList, setBooksList] = useState([]);

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre o seu livro em nossa estante.</Subtitle>
      <Input
        placeholder="Escreva a sua próxima leitura"
        onBlur={event => {
          const query = event.target.value;
          const booksFiltered = books.filter(book => book.name.toLowerCase().includes(query.toLowerCase()));
          setBooksList(booksFiltered);
        }}
      />
      <BooksList>
        {booksList.map(book => (
          <div key={book.id}>
            <img src={book.src} alt={book.name} />
            <p>{book.name}</p>
          </div>
        ))}
      </BooksList>

    </SearchContainer>
  )
}

export default Search;