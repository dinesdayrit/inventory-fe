export default function MainNav() {
  const name = localStorage.getItem("currentUser");
  return <span className="flex space-x-2 items-center">Hello, {name}</span>;
}
