type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
  age?: number;
};

const Greet = ({ name, isLoggedIn, messageCount }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}! You have ${messageCount} unread messages`
          : 'Welcome guest'}
      </h2>
    </div>
  );
};

export default Greet;
