import styled from 'styled-components';

const Container = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
`;

// TODO) className 충돌 있음. Webpack 설정 때문인 것 같음.
const Text = styled.span`
  color: #ffffff;
`;

export default function Home() {
  return (
    <Container>
      <Text>grassland</Text>
      <Text>4 dudes</Text>
    </Container>
  );
}
