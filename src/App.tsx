import "./App.css";
import Header from "./components/header/header";
import Homepage from "./components/container/homepage/homepage";
import { useWindowSize } from "./common/windowSize";
import withSideMargins from "./common/components/side-margin/withSideMagrins";

function App() {
  // const width = useWindowSize()
  // let padding: string
  // if (width < 1360) {
  //   padding = '0 100px'
  // } else {
  //   padding = `0 ${2 * width - 2500}px 0 ${2 * width - 2800}px`
  // }

  var top = 0;

  const scroll = ():React.UIEventHandler<HTMLDivElement> => {
    var scr = setInterval(function () {
      top += 5;
      window.scrollTo(0, top);

      if (top > 1000) {
        clearInterval(scr);
      }
    }, 15);
    // window.scrollTo(0, 500);
    return App
  };

  const style = {
    margin: "0",
    backgroundColor: "var(--main-bg-color)",
    fontFamily: '"Poppins", sans-serif',
  };

  const HeaderWithMargins = withSideMargins({ Component: <Header /> });

  return (
    <div className="App" style={style} onScroll={scroll()}>
      {HeaderWithMargins}
      <Homepage />
    </div>
  );
}

export default App;
