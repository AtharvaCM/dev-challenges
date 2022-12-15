import React from "react";

import Button from "./components/UI/Button";

const App: React.FC = () => {
  return (
    <div className="container p-10">
      <Button variant="text" color="danger">
        Click Me
      </Button>
    </div>
  );
};

export default App;
