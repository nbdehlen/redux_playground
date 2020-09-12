import React from 'react';
import {P} from '../styles/p';
import {SectionOne} from '../styles/section';
import {Container} from '../styles/wrapper';
import {Counter} from '../features/counter/counter'
import PostList from './PostList';
import PostForm from './PostForm';
function App() {
  return (
    <Container>
    

    <SectionOne>
    <PostForm />
    </SectionOne>


    <SectionOne>
     <PostList kakor={['Mumsmums', 'Oreos', 'Chokladbollar']}/>
    </SectionOne>

    </Container>
  );
}

export default App;
