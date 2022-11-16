import styled from 'styled-components';
import Layout from '../layouts/Layout';

const Text = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  text-decoration: underline;
`;

export default function Home() {
  return (
    <Layout>
      <Text>Home</Text>
    </Layout>
  );
}
