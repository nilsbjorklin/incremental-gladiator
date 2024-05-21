import Container from "./Container";
import GladiatorProvider from "./GladiatorContext";

function App() {
    return (
        <GladiatorProvider>
            <Container />
        </GladiatorProvider>
    );
}

export default App;