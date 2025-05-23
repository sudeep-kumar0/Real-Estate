import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9fbfd;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 2rem;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #0a6cad, #08a3df);
    border-radius: 2px;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: #0a6cad;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const PropertyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 2rem;
`;

const PropertyCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  background-color: white;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
  }
`;

const PropertyImage = styled.div`
  height: 220px;
  background-size: cover;
  background-position: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  }
`;

const PropertyInfo = styled.div`
  padding: 1.8rem;
`;

const PropertyTitle = styled.h3`
  margin-top: 0;
  color: #222;
  font-size: 1.4rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PropertyPrice = styled.div`
  font-weight: 700;
  color: #0a6cad;
  font-size: 1.4rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;

  &:before {
    content: "₹";
    margin-right: 2px;
    font-size: 0.9em;
  }
`;

const PropertyDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;
  color: #666;
  font-size: 0.95rem;
  border-top: 1px solid #eee;
  padding-top: 1.2rem;
`;

const PropertyDetail = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    color: #0a6cad;
  }
`;

const BackButton = styled.button`
  background: #f0f0f0;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
  color: #333;

  &:hover {
    background: #e0e0e0;
    transform: translateX(-5px);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background: ${(props) => props.color || "rgba(10, 108, 173, 0.85)"};
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
`;

const Mangalore = () => {
  const navigate = useNavigate();

  // Enhanced property data with more houses and additional details
  const properties = [
    {
      id: 1,
      title: "Modern Villa in Kadri Hills",
      price: "1.2 Cr",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      beds: 4,
      baths: 3,
      area: "3200 sq ft",
      badge: "Premium",
      badgeColor: "rgba(10, 108, 173, 0.85)",
    },
    {
      id: 2,
      title: "Seaview Apartment in Surathkal",
      price: "85 Lakhs",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      beds: 3,
      baths: 2,
      area: "1800 sq ft",
      badge: "Sea View",
      badgeColor: "rgba(25, 135, 84, 0.85)",
    },
    {
      id: 3,
      title: "Luxury Flat in City Centre",
      price: "95 Lakhs",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      beds: 3,
      baths: 2,
      area: "2000 sq ft",
    },
    {
      id: 4,
      title: "Family Home in Bejai",
      price: "1.5 Cr",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      beds: 5,
      baths: 4,
      area: "4000 sq ft",
      badge: "Spacious",
      badgeColor: "rgba(13, 110, 253, 0.85)",
    },
    {
      id: 5,
      title: "Riverside Villa in Kuloor",
      price: "1.8 Cr",
      image:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      beds: 4,
      baths: 4,
      area: "3600 sq ft",
      badge: "Waterfront",
      badgeColor: "rgba(25, 135, 84, 0.85)",
    },
    {
      id: 6,
      title: "Modern Apartment near Falnir",
      price: "78 Lakhs",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      beds: 2,
      baths: 2,
      area: "1650 sq ft",
    },
    {
      id: 7,
      title: "Penthouse in Mangalore CBD",
      price: "2.1 Cr",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      beds: 4,
      baths: 3,
      area: "3100 sq ft",
      badge: "Luxury",
      badgeColor: "rgba(102, 16, 242, 0.85)",
    },
    {
      id: 8,
      title: "Garden House in Bajpe",
      price: "1.3 Cr",
      image:
        "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      beds: 3,
      baths: 3,
      area: "2800 sq ft",
      badge: "Garden",
      badgeColor: "rgba(25, 135, 84, 0.85)",
    },
    {
      id: 9,
      title: "Compact Apartment in Moodbidri",
      price: "55 Lakhs",
      image:
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      beds: 2,
      baths: 1,
      area: "1100 sq ft",
      badge: "Best Deal",
      badgeColor: "rgba(220, 53, 69, 0.85)",
    },
  ];

  return (
    <PageContainer>
      <BackButton onClick={() => navigate("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        Back to Locations
      </BackButton>

      <Header>
        <Title>Properties in Mangalore</Title>
        <Description>
          Discover your dream home in Mangalore, a coastal gem known for its
          beautiful beaches, rich culture, and growing real estate market.
          Browse through our exclusive selection of premium properties.
        </Description>
      </Header>

      <PropertyGrid>
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            onClick={() => navigate(`/house/${property.id}`)}
          >
            {property.badge && (
              <Badge color={property.badgeColor}>{property.badge}</Badge>
            )}
            <PropertyImage
              style={{ backgroundImage: `url(${property.image})` }}
            />
            <PropertyInfo>
              <PropertyTitle>{property.title}</PropertyTitle>
              <PropertyPrice>{property.price}</PropertyPrice>
              <PropertyDetails>
                <PropertyDetail>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z" />
                    <path d="M9 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                  {property.beds} Beds
                </PropertyDetail>
                <PropertyDetail>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm4.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm-7 7a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm4.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  </svg>
                  {property.baths} Baths
                </PropertyDetail>
                <PropertyDetail>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  </svg>
                  {property.area}
                </PropertyDetail>
              </PropertyDetails>
            </PropertyInfo>
          </PropertyCard>
        ))}
      </PropertyGrid>
    </PageContainer>
  );
};

export default Mangalore;
