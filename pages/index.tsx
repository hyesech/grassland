import styled from 'styled-components';

const Container = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
`;

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
