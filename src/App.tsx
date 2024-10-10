import Tabs from './components/Tabs';
import Accordion from './components/Accordion';
import PostCard from './components/Card';
import Modal from './components/Modal';
import TableWithPagination from './components/Table/TableWithPagination';
import InfinitePagination from './components/InfinitePagination';
import ProductList from './components/ProductList';
import ExpendableTable from './components/ExpendableTable/Table';

const tabData = [
  { id: 'tab1_unique_id', title: 'Tab 1', content: 'Content for Tab 1' },
  { id: 'tab2_unique_id', title: 'Tab 2', content: 'Content for Tab 2' },
  { id: 'tab3_unique_id', title: 'Tab 3', content: 'Content for Tab 3' },
];

const accordionData = [
  { id: 'accordion1', title: 'Accordion 1', content: 'Content for Accordion 1' },
  { id: 'accordion2', title: 'Accordion 2', content: 'Content for Accordion 2' },
  { id: 'accordion3', title: 'Accordion 3', content: 'Content for Accordion 3' },
];

export default function App() {
  return (
    <>
      <ProductList />
    </>
  );
}
