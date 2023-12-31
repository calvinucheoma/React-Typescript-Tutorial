import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Box from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';
// import Counter from './components/state/Counter';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import { Counter } from './components/class/Counter';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generics/List';
import RandomNumber from './components/restriction/RandomNumber';
import Toast from './components/templateLiterals/Toast';
import CustomButton from './components/html/Button';
import CustomComponent from './components/html/CustomComponent';
import Text from './components/polymorphic/Text';

function App() {
  const personName = {
    first: 'Chuks',
    last: 'Wayne',
  };

  // const peopleNames = ['John Doe', 'Jane Doe', 'Joshua Smithy'];

  const namesList = [
    {
      first: 'Dave',
      last: 'Santan',
    },
    {
      first: 'Jim',
      last: 'Iyke',
    },
    {
      first: 'Rey',
      last: 'Steerio',
    },
  ];

  return (
    <div className="App">
      <Greet name="Chukwuma" messageCount={20} isLoggedIn={false} age={25} />
      <Person name={personName} />
      <PersonList names={namesList} />
      <Status status="error" />
      <Heading>Header Text</Heading>
      <Oscar>
        <Heading>And the oscar award goes to Matt Skyler!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => console.log('Button clicked', event, id)}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <LoggedIn />
      <User />
      {/* <Counter /> */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Counter message="The count value is:" />
      <Private isLoggedIn={true} component={Profile} />
      <List
        items={['Batman', 'Spiderman', 'Superman']}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <RandomNumber value={10} isPositive />
      <Toast position="center" />
      <CustomButton variant="primary" onClick={() => console.log('clicked')}>
        Primary Button
      </CustomButton>
      <CustomComponent name="Chuks" messageCount={10} isLoggedIn={false} />
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="id" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
