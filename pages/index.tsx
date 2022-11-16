import styled from 'styled-components';
import Layout from '../layouts/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// TODO) className 충돌 있음. Webpack 설정 때문인 것 같음.
const Text = styled.span`
  color: #ffffff;
`;

export default function Home() {
  return (
    <Layout>
      <Text>text</Text>
    </Layout>
  );
}
