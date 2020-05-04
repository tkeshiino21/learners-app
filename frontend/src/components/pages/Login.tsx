import React from 'react';
import styled from '@emotion/styled';
import { MdArrowForward } from 'react-icons/md';
import PageLayout from '../organisms/PageLayout';
import {
  Heading,
  Wrap,
  Button,
  Flex,
  Label,
  Input,
  StyledLink,
} from '../atoms';

const CenterContainer = styled.div`
  display: flex;
  height: 86vh;
  margin: auto;
`;

const CenterWrapper = styled.div`
  margin: auto;
`;

const Login = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mr="120px" style={{ minHeight: '72vh' }}>
        <CenterContainer>
          <CenterWrapper>
            <div style={{ width: '500px' }}>
              <Heading
                className="h1"
                proximity="0px"
                style={{ fontFamily: 'sans-serif' }}
              >
                Login
              </Heading>
              <form>
                <Wrap mt="32px">
                  <Label style={{ display: 'block' }}>名前</Label>
                  <Input style={{ height: '32px', width: '500px' }} />
                </Wrap>
                <Wrap mt="32px">
                  <Label style={{ display: 'block' }}>メールアドレス</Label>
                  <Input style={{ height: '32px', width: '500px' }} />
                </Wrap>
                <Wrap mt="48px">
                  <Button className="primary large" style={{ width: '500px' }}>
                    ログイン
                  </Button>
                </Wrap>
                <Wrap mt="32px">
                  <Flex justify="flex-end">
                    <StyledLink to="/signup">
                      <Button className="text" style={{ textAlign: 'right' }}>
                        新規登録に切り替え
                      </Button>
                      <MdArrowForward />
                    </StyledLink>
                  </Flex>
                </Wrap>
              </form>
            </div>
          </CenterWrapper>
        </CenterContainer>
      </Wrap>
    </PageLayout>
  );
};

export default Login;
