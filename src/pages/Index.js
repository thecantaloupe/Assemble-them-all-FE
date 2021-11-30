import Assembles from "../Assembles/Assembles";
import Form from "../components/Form/Form";
import "./styles.css";

const Index = (props) => {
  // add a div container then make the background
  const [main, changeMain] = props.functions
  changeMain("index")
  return (
    <div className="container2">
      <section>
        <div className="card2">
          <Form />
        </div>
        <Assembles 
        functions={[main, changeMain]}
        />
      </section>
    </div>
  );
};

export default Index;
