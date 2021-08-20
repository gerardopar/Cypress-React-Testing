import Header from './Components/Header/Header';
import InputForm from './Components/InputForm/InputForm';
import DoggiesList from './Components/Doggies/DoggiesList';

import './App.css';
import './App.scss';

const MOCK_DATA = [
  {
    id: "1",
    name: "Yorkie",
    url: "https://www.thesprucepets.com/thmb/wUATuqZfVXedDqKnYorz3vwadQ8=/1414x1414/smart/filters:no_upscale()/GettyImages-652401198-53c4d9adf78c4d5a9cb1eec9d8ecb1a5.jpg",
  },
  {
    id: "2",
    name: "Dalmation",
    url: "https://i1.wp.com/puppytoob.com/wp-content/uploads/2015/05/dalmatian.jpg?resize=750%2C500&ssl=1",
  },
  {
    id: "1",
    name: "Yorkie",
    url: "https://www.thesprucepets.com/thmb/wUATuqZfVXedDqKnYorz3vwadQ8=/1414x1414/smart/filters:no_upscale()/GettyImages-652401198-53c4d9adf78c4d5a9cb1eec9d8ecb1a5.jpg",
  },
  {
    id: "2",
    name: "Dalmation",
    url: "https://i1.wp.com/puppytoob.com/wp-content/uploads/2015/05/dalmatian.jpg?resize=750%2C500&ssl=1",
  },
  {
    id: "1",
    name: "Yorkie",
    url: "https://www.thesprucepets.com/thmb/wUATuqZfVXedDqKnYorz3vwadQ8=/1414x1414/smart/filters:no_upscale()/GettyImages-652401198-53c4d9adf78c4d5a9cb1eec9d8ecb1a5.jpg",
  },
  {
    id: "2",
    name: "Dalmation",
    url: "https://i1.wp.com/puppytoob.com/wp-content/uploads/2015/05/dalmatian.jpg?resize=750%2C500&ssl=1",
  },
  {
    id: "1",
    name: "Yorkie",
    url: "https://www.thesprucepets.com/thmb/wUATuqZfVXedDqKnYorz3vwadQ8=/1414x1414/smart/filters:no_upscale()/GettyImages-652401198-53c4d9adf78c4d5a9cb1eec9d8ecb1a5.jpg",
  },
  {
    id: "2",
    name: "Dalmation",
    url: "https://i1.wp.com/puppytoob.com/wp-content/uploads/2015/05/dalmatian.jpg?resize=750%2C500&ssl=1",
  },
  {
    id: "1",
    name: "Yorkie",
    url: "https://www.thesprucepets.com/thmb/wUATuqZfVXedDqKnYorz3vwadQ8=/1414x1414/smart/filters:no_upscale()/GettyImages-652401198-53c4d9adf78c4d5a9cb1eec9d8ecb1a5.jpg",
  },
  {
    id: "2",
    name: "Dalmation",
    url: "https://i1.wp.com/puppytoob.com/wp-content/uploads/2015/05/dalmatian.jpg?resize=750%2C500&ssl=1",
  },
  {
    id: "1",
    name: "Yorkie",
    url: "https://www.thesprucepets.com/thmb/wUATuqZfVXedDqKnYorz3vwadQ8=/1414x1414/smart/filters:no_upscale()/GettyImages-652401198-53c4d9adf78c4d5a9cb1eec9d8ecb1a5.jpg",
  },
  {
    id: "2",
    name: "Dalmation",
    url: "https://i1.wp.com/puppytoob.com/wp-content/uploads/2015/05/dalmatian.jpg?resize=750%2C500&ssl=1",
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <InputForm handleSubmit={() => {}}/>
      <DoggiesList doggies={MOCK_DATA} />
    </div>
  )
};

export default App;
