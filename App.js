import Main from "./src/Main"
import { NavigationContainer } from "@react-navigation/native"
import { Provider as StoreProvider } from 'react-redux'
import store from "./src/utils/store"

export default function App() {
    return (
        <StoreProvider store={store}>
            <NavigationContainer>
                <Main />
            </NavigationContainer>
        </StoreProvider>
    )
}