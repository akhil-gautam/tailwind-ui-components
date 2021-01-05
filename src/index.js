import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './assets/main.scss';
import { Table, Thead, Th, Tr, Tbody, Td, Tfoot } from '../lib/components';

const wrapper = document.getElementById('root');

const App = () => {
  const [isOpen, setopen] = useState(true);
  const onClose = () => setopen(false);

  return (
    <div className='flex justify-center items-center w-full h-full px-32 bg-purple-600'>
      <>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Roll</Th>
              <Th>Marks</Th>
              <Th>Passed</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Akhil</Td>
              <Td>12</Td>
              <Td>56</Td>
              <Td>Yes</Td>
            </Tr>
            <Tr>
              <Td>Akhil</Td>
              <Td>12</Td>
              <Td>56</Td>
              <Td>Yes</Td>
            </Tr>
            <Tr>
              <Td>Akhil</Td>
              <Td>12</Td>
              <Td>56</Td>
              <Td>Yes</Td>
            </Tr>
            <Tr>
              <Td>Akhil</Td>
              <Td>12</Td>
              <Td>56</Td>
              <Td>Yes</Td>
            </Tr>
            <Tr>
              <Td>Akhil</Td>
              <Td>12</Td>
              <Td>56</Td>
              <Td>Yes</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Td colSpan={4}>This is a footer</Td>
            </Tr>
          </Tfoot>
        </Table>
      </>
    </div>
  );
};

wrapper ? ReactDOM.render(<App />, wrapper) : false;
