import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = [
    { label: "À propos", id: "about" },
    { label: "Services", id: "services" },
    { label: "Cours", id: "cours" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav>
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.id}
          smooth={true}
          duration={500}
          style={{ marginRight: "20px", cursor: "pointer", color:"brown"  }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="about">
      </div>
      <div id="services">
      </div>
      <div id="cours">

      </div>
      <div id="contact" >
        
      </div>
    </div>
  );
};

export default App;
