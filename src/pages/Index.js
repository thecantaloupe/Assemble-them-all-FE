import Assembles from "../Assembles/Assemble";
import Form from "../components/Form/Form";
import "./styles.css";

const Index = (props) => {
  // add a div container then make the background
  return (
    <div className="container2">
      <section>
        <div className="card2">
          <Form />
        </div>
        <Assembles />
      </section>
    </div>
  );
};

export default Index;
