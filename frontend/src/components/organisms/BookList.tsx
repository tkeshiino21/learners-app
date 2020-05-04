import React from 'react';
import { Heading, Flex, Wrap, Image, Text } from '../atoms';
import book1 from '../../images/book1.jpeg';
import book2 from '../../images/book2.jpeg';
import book3 from '../../images/book3.jpeg';
import book4 from '../../images/book4.jpeg';
import book5 from '../../images/book5.jpeg';

const BookList = () => {
  const newBooks = [
    {
      title: 'アラビアン・ナイト',
      image: book1,
    },
    {
      title: 'その',
      image: book2,
    },
    {
      title: 'この',
      image: book3,
    },
    {
      title: 'this',
      image: book4,
    },
    {
      title: 'that',
      image: book5,
    },
  ];
  const books = [
    {
      title: 'アラビアン・',
      image: book3,
    },
    {
      title: 'アラビアン・ナイト',
      image: book4,
    },
    {
      title: 'アラビア・ナイト',
      image: book5,
    },
  ];

  return (
    <>
      <div>
        <Heading>４月の新刊</Heading>
        {newBooks.map((book) => {
          return (
            <Image
              className="container"
              src={book.image}
              style={{ marginRight: '32px', height: '182px', width: '128px' }}
            />
          );
        })}
      </div>
      <Wrap mt="40px">
        <Heading>ベストセラー</Heading>
        {books.map((book) => {
          return (
            <Wrap mt="24px">
              <Flex>
                <Image
                  className="left container"
                  src={book.image}
                  style={{ height: '182px', width: '128px' }}
                />
                <div>
                  <Heading className="h4">{book.title}</Heading>
                  <Text>
                    2019年4月１日 <br /> 新宿もくもく会 <br />
                    @新宿
                  </Text>
                </div>
              </Flex>
            </Wrap>
          );
        })}
      </Wrap>
    </>
  );
};

export default BookList;
