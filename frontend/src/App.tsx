import useTypicoApi from './hooks/useTypicoApi';

import './App.css'

const App = () => {
  const { data, isError, isLoading  } = useTypicoApi();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  console.log(data);
  return (
    <div className='font-bold text-red-400'>Hello</div>
  )
};

export default App;
