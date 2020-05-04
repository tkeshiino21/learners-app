import React from 'react';
import { FaTwitter, FaGithub, FaFacebook } from 'react-icons/fa';
import ds from '../../../theme/theme';
import PageLayout from '../../organisms/PageLayout';
import { Heading, Button, Wrap, Text, StyledLink } from '../../atoms';

const Profile = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="120px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          Profile
        </Heading>
        <Text>Adamさんのプロフィールが見られます。</Text>
        <div
          style={{
            paddingBottom: '32px',
            borderBottom: `1px solid ${ds.color('light', '4')}`,
            width: '100%',
          }}
        >
          <StyledLink to="/profile-edit">
            <Button className="primary">プロフィールを編集</Button>
          </StyledLink>
          <Button className="outlined" ml="24px">
            <StyledLink to="/signup">所属コミュニティ</StyledLink>
          </Button>
        </div>
        <section>
          <Wrap mt="32px">
            <Heading
              className="h3"
              proximity="0px"
              style={{ fontFamily: 'sans-serif' }}
            >
              Aban Badpista
            </Heading>
            <Wrap mt="12px" mb="40px">
              <StyledLink to="./follow">
                <FaTwitter
                  style={{
                    fontSize: '32px',
                    marginRight: '24px',
                    color: '#55acee',
                  }}
                />
              </StyledLink>
              <StyledLink to="./follower">
                <FaFacebook
                  style={{
                    fontSize: '32px',
                    marginRight: '24px',
                    color: '#3B5998',
                  }}
                />
              </StyledLink>
              <StyledLink to="./follower">
                <FaGithub
                  style={{
                    fontSize: '32px',
                    marginRight: '24px',
                    color: '#4183c4',
                  }}
                />
              </StyledLink>
            </Wrap>
            <Text>会計士</Text>
            <Text>年齢：32才</Text>
            <Text>性別：男</Text>
            <Text>趣味：ガーデニング</Text>
            <Text>出身：アメリカ</Text>
            <Text>大学：南カルフォルニア大学</Text>
          </Wrap>
          <Wrap mt="40px" />
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default Profile;
