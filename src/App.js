

import styled from 'styled-components';
import Header from './components/Header';

function App() {
  return (
    <FullBody >
      <Header/>
    </FullBody>
  );
}

export default App;


const FullBody = styled.div`
padding:16px 24px;`