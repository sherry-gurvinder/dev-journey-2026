 // --- WEEK 1: DESTRUCTURING ---

 const developerProfile = {
    alias: "SG",
    role: "Full-Stack Engineer",
    stack: ["React", "Node", "PostgreSQL"],
    coffeeCups: 2
  };
  
  // We "unpack" only the exact variables we need from the object in one line of code:
  const { alias, role, stack } = developerProfile;
  
  console.log(`STATUS UPDATE: ${alias} is operating as a ${role}, currently studying ${stack[1]}.`);
