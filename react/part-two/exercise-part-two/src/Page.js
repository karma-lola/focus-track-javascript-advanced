const Page = (props) => {
  const { title, children } = props;
  return (
    <main>
      <h2>{title}</h2>
      {children}
    </main>
  );
};
export default Page;
