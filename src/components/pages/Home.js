import React from "react";
import styled from "styled-components";

const teamMembers = [
  {
    name: "Avinash kumar",
    role: "Founder & CEO",
    image: "https://via.placeholder.com/200",
    description:
      "Avinash is the visionary behind ShoppiKa, bringing a decade of retail expertise.",
  },
  {
    name: "Rahul kumar",
    role: "Head of Marketing",
    image: "https://via.placeholder.com/200",
    description:
      "Rahul kumar crafts strategies that connect our products to customers worldwide.",
  },
  {
    name: "Satish Singh",
    role: "Lead Designer",
    image: "https://via.placeholder.com/200",
    description:
      "Satish Singh ensures that every product we offer is both stylish and functional.",
  },
];

const Home = () => {
  return (
    <Container>
      <Header>
        <Title>Welcome to ShoppiKa</Title>
        <Subtitle>Meet the team behind ShoppiKa</Subtitle>
      </Header>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamCard key={index}>
            <ImageContainer>
              <Image src={member.image} alt={member.name} />
              <Overlay>
                <OverlayText>{member.description}</OverlayText>
              </Overlay>
            </ImageContainer>
            <Info>
              <Name>{member.name}</Name>
              <Role>{member.role}</Role>
            </Info>
          </TeamCard>
        ))}
      </TeamGrid>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const TeamCard = styled.div`
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;
  padding: 1rem;
`;

const OverlayText = styled.p`
  font-size: 1rem;
`;

const Info = styled.div`
  padding: 1rem;
`;

const Name = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const Role = styled.p`
  color: #777;
  font-size: 1rem;
`;
