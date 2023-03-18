import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Categories = () => {
  return (
    <Container>
      <Row className='text-center'>
        <h1>CATEGORIES</h1>
      </Row>
    </Container>
  );
};

export default Categories;

// {
// const [bar, setBar] = useState(0);
// useEffect(() => {
//   let timer = null;
//   timer = setInterval(() => {
//     if (bar < 1200) {
//       setBar(bar + 10);
//     } else {
//       clearInterval(timer);
//     }
//   }, 1000);
//   return () => clearInterval(timer);
// });
/* <div style={{ width: '100%', border: '1px solid black', height: '20px', padding: '0px' }}>
      <div
        style={{
          width: `${bar}px`,
          height: '100%',
          backgroundColor: 'red',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
        }}>
        <span style={{ color: 'white', fontSize: '12px' }}></span>
      </div>
    </div> */
// }
