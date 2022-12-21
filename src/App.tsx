import React from "react";

import Button from "./components/UI/Button";

const App: React.FC = () => {
  return (
    <div className="container p-10">
      {/* Heading */}
      <h1 className="mb-2 text-2xl font-bold text-[#4F4F4F]">Buttons</h1>

      {/* Button div */}
      <div>
        <table className="w-10/12 border-separate border-spacing-y-7">
          {/* Row 1 */}
          <tr>
            <td>
              <p className="mb-3 text-sm text-[#333333]">&lt;Button /&gt;</p>
              <Button>Click Me</Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#828282]">
                &amp;:hover, &amp;:hover
              </p>
              <Button className="!bg-[#AEAEAE]">Click Me</Button>
            </td>
          </tr>

          {/* Row 2 */}
          <tr>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button variant="outline" /&gt;
              </p>
              <Button variant="outline">Click Me</Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#828282]">
                &amp;:hover, &amp;:hover
              </p>
              <Button variant="outline" className="!bg-[#E0E0E0]">
                Click Me
              </Button>
            </td>
          </tr>

          {/* Row 3 */}
          <tr>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button variant="text" /&gt;
              </p>
              <Button variant="text">Click Me</Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#828282]">
                &amp;:hover, &amp;:hover
              </p>
              <Button variant="text" className="!bg-[#E0E0E0]">
                Click Me
              </Button>
            </td>
          </tr>

          {/* Row 4 */}
          <tr>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button disableShadow /&gt;
              </p>
              <Button disableShadow>Click Me</Button>
            </td>
          </tr>

          {/* Row 5 */}
          <tr>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button disabled /&gt;
              </p>
              <Button disabled>Click Me</Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button variant="outline" disabled /&gt;
              </p>
              <Button variant="outline" disabled>
                Click Me
              </Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button variant="text" disabled /&gt;
              </p>
              <Button variant="text" disabled>
                Click Me
              </Button>
            </td>
          </tr>

          {/* Row 6 */}
          <tr>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button size="sm" /&gt;
              </p>
              <Button size="sm">Click Me</Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button size="md" /&gt;
              </p>
              <Button size="md">Click Me</Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button size="lg" /&gt;
              </p>
              <Button size="lg">Click Me</Button>
            </td>
          </tr>

          {/* Row 7 */}
          <tr>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button color="default" /&gt;
              </p>
              <Button color="default">Click Me</Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button color="primary" /&gt;
              </p>
              <Button color="primary">Click Me</Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button color="secondary" /&gt;
              </p>
              <Button color="secondary">Click Me</Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button color="danger" /&gt;
              </p>
              <Button color="danger">Click Me</Button>
            </td>
          </tr>

          {/* Row 8 */}
          <tr>
            <td>
              <p className="mb-3 text-sm text-[#828282]">
                &amp;:hover, &amp;:hover
              </p>
              <Button color="default" className="!bg-[#AEAEAE]">
                Click Me
              </Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#828282]">
                &amp;:hover, &amp;:hover
              </p>
              <Button color="primary" className="!bg-[#0039CB]">
                Click Me
              </Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#828282]">
                &amp;:hover, &amp;:hover
              </p>
              <Button color="secondary" className="!bg-[#1C313A]">
                Click Me
              </Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#828282]">
                &amp;:hover, &amp;:hover
              </p>
              <Button color="danger" className="!bg-[#9A0007]">
                Click Me
              </Button>
            </td>
          </tr>

          {/* Row 9 */}
          <tr>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button startIcon="local_grocery_store" /&gt;
              </p>
              <Button startIcon={"local_grocery_store"}>Click Me</Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button startIcon="mail_outline" /&gt;
              </p>
              <Button startIcon="mail_outline">Click Me</Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button endIcon="local_hotel" /&gt;
              </p>
              <Button endIcon="local_hotel">Click Me</Button>
            </td>
            <td>
              <p className="mb-3 text-sm text-[#333333]">
                &lt;Button endIcon="info" /&gt;
              </p>
              <Button name="myBtn" endIcon="info">
                Click Me
              </Button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default App;
