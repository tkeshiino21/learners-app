import React from 'react';
import PageLayout from '../../organisms/PageLayout';
import { Heading, Wrap, Text } from '../../atoms';
import BookList from '../../organisms/BookList';

const Book = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="24px" mr="48px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          Book
        </Heading>
        <Text>学習に役立つ本の情報をお届けします。</Text>
        <section>
          <BookList />
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default Book;
