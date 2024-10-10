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
      <Accordion>
        {accordionData.map((item, index) => (
          <Accordion.Item key={item.id} index={index}>
            {({ isActive }) => (
              <>
                <Accordion.Button index={index}>{item.title}</Accordion.Button>
                <Accordion.Content isActive={isActive}>
                  {item.content}
                </Accordion.Content>
              </>
            )}
          </Accordion.Item>
        ))}
      </Accordion>
      <hr />
      <div className="tabs-wrapper">
        <Tabs>
          <Tabs.Titles items={tabData.map(({ id, title }) => ({ id, title }))} />
          <Tabs.Contents
            items={tabData.map(({ id, content }) => ({
              id,
              content: <p>{content}</p>,
            }))}
          />
        </Tabs>
      </div>
      <hr />
      <PostCard
        post={{
          id: 1,
          title: 'Post Card',
          content: 'This is the first post',
          user: {
            id: 1,
            name: 'John Doe'
          }
        }}
      >
        <PostCard.Title />
        <PostCard.Content />
        <PostCard.User />
        <PostCard.Buttons />
      </PostCard>
      <hr />
      <div className="flex justify-center items-center">
        <div>
          <Modal>
            <Modal.Header title="This is a compound component" />
            <Modal.Body
              description="Here is the description of the modal body."
              children={
                <label>
                  What's your name?
                  <input type="text" />
                </label>
              }
            />
            <Modal.Footer
              confirmLable='Confirm'
              closeLable='Close'
            />
          </Modal>
        </div>
      </div>
      <hr />
      <ExpendableTable />
      <hr />
      <TableWithPagination />
      <hr />
      <ProductList />
      <hr />
      <InfinitePagination />
    </>
  );
}
