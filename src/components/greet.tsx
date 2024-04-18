export default function Greet(props: { name: string }) {
  const { name } = props;

  return <div>Hello {name}</div>;
}
