import React from "react";

import Button from "./components/UI/Button";

const App: React.FC = () => {
  return (
    <div className="container p-10">
      <Button variant="text" disabled>
        Click Me
      </Button>
    </div>
  );
};

export default App;
