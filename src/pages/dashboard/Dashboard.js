// import React from 'react';
// import { Nav } from 'react-bootstrap';

// const Dashboard = () => {
//   return (
//     <div className="sidebar">
//       <Nav defaultActiveKey="/home" className="flex-column">
//         <Nav.Link href="/home">Category 1</Nav.Link>
//         <Nav.Link href="/home">Category 2</Nav.Link>
//         <Nav.Link href="/home">Category 3</Nav.Link>
//         {/* Add more categories here */}
//       </Nav>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  width: 200px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductName = styled.h3`
  margin: 10px 0;
  font-size: 18px;
`;

const ProductPrice = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #888;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6600;
  }
`;

const Dashboard = () => {
  // Mock data for products and categories
  const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: '$20', image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: '$30', image: 'product3.jpg' },
    // Add more products as needed
  ];

  const categories = ['Category 1', 'Category 2', 'Category 3'];

  return (
    // <DashboardContainer>
    //   {/* Product Listings */}
    //   {products.map(product => (
    //     <ProductCard key={product.id}>
    //       <ProductImage src={product.image} alt={product.name} />
    //       <ProductName>{product.name}</ProductName>
    //       <ProductPrice>{product.price}</ProductPrice>
    //     </ProductCard>
    //   ))}

    //   {/* Category Navigation */}
    //   <CategoryList>
    //     {categories.map(category => (
    //       <CategoryItem key={category}>{category}</CategoryItem>
    //     ))}
    //   </CategoryList>
    // </DashboardContainer>
    <></>
  );
};

export default Dashboard;
