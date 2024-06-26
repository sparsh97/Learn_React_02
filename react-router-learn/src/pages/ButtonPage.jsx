
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => console.log("Clicked");
  return (
    <>
      <div>
        <Button onClick={handleClick} primary>
          Click Here
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          {" "}
          By now{" "}
        </Button>
      </div>
      <div>
        <Button warn outline>
          {" "}
          Download
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          {" "}
          OMG{" "}
        </Button>
      </div>
    </>
  );
}

export default ButtonPage;
