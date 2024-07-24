interface Props {
  navlink: string;
}

const NavItem = ({ navlink }: Props) => {
  return (
    <li>
      <a href={`#${navlink.toLowerCase()}`}>{navlink}</a>
    </li>
  );
};

export default NavItem;
