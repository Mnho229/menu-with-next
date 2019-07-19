import Link from 'next/link';

const NavItem = (props) => {
  return (
    <li className="nav-items">
      <Link href={`/content/${props.id}`}>
        <a>{props.label}</a>
      </Link>
    
    {style()}    
    </li>

  )
}

function style() {
  return (
    <style jsx="true">{`
      .nav-items {
        font-size: 2rem;
        padding: 1rem 5rem 1rem 1rem;
        list-style: none;
      }
      .nav-items a {
        text-decoration: none;
        color: black;
      }
    `}</style>
  )
}

export default NavItem;