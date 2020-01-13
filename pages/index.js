import { useState } from 'react'
import Link from 'next/link'

export default function Index() {
  const [wow, setWow] = useState(false)
  const toggle = () => setWow(!wow)
  return (
    <div>
      <button onClick={toggle}>Click for some WOW!</button>Heyo I am wow? I AM
      THE BOOTSTRAP BRANCH!!!
      {wow === true ? 'YES!' : 'No.....'}
      <Link href="/fun">
        <a>Fun Page</a>
      </Link>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </div>
  )
}
