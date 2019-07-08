import Link from 'next/link';

const Navbar = () => (
  <div>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
      <li><Link href="/content"><a>Content</a></Link></li>
    </ul>

    <style jsx>{`
      ul {
        background: #333;
        color: #fff;
        list-style: none;
        display: flex;
        justify-content: flex-end
      }
      
      ul li {
        font-size: 2rem;
        font-family: sans-serif;
        margin-right: 60px;
      }
      ul li a {
        color: #fff;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default Navbar