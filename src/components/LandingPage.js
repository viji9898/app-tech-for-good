import { Button } from "antd";
import { DynamicMetaTags } from "../utils/dynamicMetaTags";

export const LandingPage = ({ helloWorld }) => {
  return (
    <div className="App">
      <DynamicMetaTags
        ogTitle={`Starter App`}
        ogDescription={
          "Starter boiler plate app includes, faunadb, netlify, ant design, axios"
        }
        ogImage={
          "https://app-viji.s3.eu-west-2.amazonaws.com/starter-app/og-image-starter-app-1200x627-01.png"
        }
        ogUrl={``}
      />
      <header className="App-header">
        <img
          src={
            "https://app-viji.s3.eu-west-2.amazonaws.com/rocket-icon-vector-starter-app.svg"
          }
          className="App-logo"
          alt="logo"
        />
        <p>From Faunadb:</p>
        {helloWorld ? (
          <p style={{ backgroundColor: "green" }}>
            <code>"{helloWorld.title}"</code>.
          </p>
        ) : (
          <p style={{ backgroundColor: "red" }}>
            "ERROR - Faunadb Not Connected"
          </p>
        )}

        <Button
          type="link"
          href="https://github.com/viji9898/app-boiler-plate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About Starter App
        </Button>
      </header>
    </div>
  );
};
